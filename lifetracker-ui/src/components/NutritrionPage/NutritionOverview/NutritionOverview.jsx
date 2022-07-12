import * as React from "react"
import NutritionFeed from "../NutritionFeed/NutritionFeed"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import apiClient from "../../../../services/apiClient"

export default function NutritionOverview(props) {
    const [nutritions, setNutritions] = useState([])
    const [error, setError] = useState(null)
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        const fetchNutritionPosts = async () => {

            const { data, error } = await apiClient.listPosts(props.user)
            setIsFetching(true)
            if (data) {
                setNutritions(data.nutritionPosts)
            }
            if (error) {
                setError(error)
            }

            setIsFetching(false)
        }

        fetchNutritionPosts()
    }, [])

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
                    <NutritionFeed nutritions = {nutritions} />
            </div>
        </div> 
    )
}