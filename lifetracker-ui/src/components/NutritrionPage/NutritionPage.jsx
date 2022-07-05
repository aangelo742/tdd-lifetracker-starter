import * as React from "react"
import "../NutritrionPage/NutritionPage.css"

export default function NutritionPage(props) {
    return (
        <div className="NutritionPage">
            <div className="Banner">
                <h1>Nutrition</h1>
            </div>
            <div className="content">
                <div className="NutritionOverview">
                    <div className="header">
                        <h3>Overview</h3>
                        <button className="Button outline small outline aqua ">Record Nutrition</button>
                    </div>
                    <div className="feed">
                        <div className="empty">
                            <h2>Nothing here yet.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}