const express = require("express")
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
      const { user } = res.locals
      const nutritionPosts = await Nutrition.listNutritionForUser(user)
      return res.status(200).json({ nutritionPosts })
      return res.status(200).json({ping: "pong"})
    } catch (err) {
      next(err)
    }
  })

router.post("/create", async (req, res, next) => {
    try {
        const { user } = res.locals
        const nutritionPost = await Nutrition.createNutrition({ user, post: req.body })
        return res.status(201).json({ nutritionPost })
    } catch(err) {
        next(err)
    }
})

router.get("/:nuritionId", async (req, res, next) => {
    try {
        const { nutritionId } = req.params
        const nutritionPost = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(200).json({ nutritionPost })
    } catch (err) {
      next(err)
    }
  })

  module.exports = router