import * as React from "react"
import NutritionFeed from "../NutritionFeed/NutritionFeed"
import { Link } from "react-router-dom"

export default function NutritionOverview() {
    return (
        <div className="nutrition-overview">
            <div className="Banner">
                <h1>Nutrition</h1>
            </div>
            <div className="header">
                <h3>Overview</h3>
                    <Link to="./create">
                        <button className="Button outline small outline aqua ">Record Nutrition</button>
                    </Link>
                </div>
                <div className="feed">
                    <NutritionFeed />
            </div>
        </div> 
    )
}