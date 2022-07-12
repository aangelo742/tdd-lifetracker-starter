const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Nutrition {
    static async createNutrition({ nutritionPost, user }) {
        const requiredFields = ["name", "category", "calories", "imageUrl"]
        requiredFields.forEach((field) => {
            if(!nutritionPost.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        const results = await db.query(
            `
            INSERT INTO nutrition (name, category, calories, image_url, user_id)
            VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE email = $5)
            )
            RETURNING id,
                      name,
                      category,
                      calories,
                      image_url AS "imageUrl",
                      user_id AS "userId"

            `,
            [nutritionPost.name, nutritionPost.category, nutritionPost.calories, nutritionPost.imageUrl, user.email]
        )

        return results.rows[0]
    }

    static async fetchNutritionById(nutritionId) {
        const results = await db.query(
            `
            SELECT n.id,
                   n.name,
                   n.category,
                   n.calories,
                   n.image_url AS "imageUrl",
                   u.username AS "username"
            FROM nutrition AS n
                LEFT JOIN users AS u ON u.id = n.user_id
            WHERE n.id = $1
            GROUP BY n.id, u.username
            `,
            [nutritionId]
        )

        const nutritionPost = results.rows[0]

        if (!nutritionPost) {
            throw new NotFoundError("Nutrition Post not found.")
        }

        return nutritionPost
    }

    static async listNutritionForUser(user) {
        console.log(user)
        const results = await db.query(
            `
            SELECT *
            FROM nutrition
            WHERE user_id = (SELECT id FROM users WHERE email = $1)

            `,
            [user.email]
        )
        return results.rows
    }
}

module.exports = Nutrition