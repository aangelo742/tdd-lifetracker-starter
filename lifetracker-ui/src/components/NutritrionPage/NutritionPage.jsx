import * as React from "react"
import "../NutritrionPage/NutritionPage.css"
import { Routes, Route, Link } from "react-router-dom"
import NotFound from "../NotFound/NotFound"
import NutritionOverview from "./NutritionOverview/NutritionOverview"
import NutritionNew from "./NutritionNew/NutritionNew"
import NutritionDetail from "./NutritionDetail/NutritionDetail"
import NutritionFeed from "./NutritionFeed/NutritionFeed"
import { useState, useEffect } from "react"
import apiClient from "../../../services/apiClient"

export default function NutritionPage({ user, setUser }) {
    const [nutritionPosts, setNutritionPosts] = useState([])
    


    return (
        <div className="NutritionPage">
            <Routes>
                <Route path="/" element={<NutritionOverview user = {user} />}/>
                <Route path="/create" element={<NutritionNew user = {user} />}/>
                <Route path="/id/:nutritionId" element={<NutritionDetail user = {user} />}/>
            </Routes>

        </div>
    )
}