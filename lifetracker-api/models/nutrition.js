const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Nutrition {
    static async createNutrition({ nutritionPost, user }) {
        const requiredFields = ["name", "category", "calories", "image_url"]
        requiredFields.forEach((field) => {
            
        })

        const results = await db.query(
            `
            INSERT INTO nutrition (name, category, calories, image_url, user_id)
            VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE username = $5))
            RETURNING id,
                      name,
                      category,
                      calories,
                      image_url AS "imageUrl",
                      $5 AS "username"

            `,
            [nutritionPost.name, nutritionPost.category, nutritionPost.calories, nutritionPost.imageUrl, user.username]
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
        const results = await db.query(
            `
            SELECT n.id,
                   n.name,
                   n.category,
                   n.calories,
                   n.image_url AS "imageUrl",
                   u.username AS "username",
            FROM nutrition AS n
                LEFT JOIN users AS u ON u.id = n.user_id
            WHERE u.username = $1
            ORDER BY n.id DESC
            `,
            [user.username]
        )

        return results.rows
    }
}

module.exports = Nutrition