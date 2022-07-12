import * as React from "react"
import NutritionForm from "../NutritionForm/NutritionForm"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiClient from "../../../../services/apiClient"

export default function NutritionNew(props) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        name: "",
        category: "",
        quantity: 1,
        calories: 0,
        imageUrl: ""
    })

    const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async (e) => {
        setIsLoading(true)
        setErrors((e) => ({ ...e, form: null }))

        const { data, error } = await apiClient.createNutritionPost({ name: form.name, category: form.category, quantity: form.quantity, calories: form.calories, imageUrl: form.imageUrl })
        if (data) {
            setForm({ 
                name: "",
                category: "",
                quantity: 1,
                calories: 0,
                imageUrl: ""
            })
        }
        if (error) {
            setErrors(error)
        }
        setIsLoading(false)
        navigate("/nutrition")
      }

    return (
        <div className="nutrition-new">
            <NutritionForm 
                handleOnInputChange={handleOnInputChange} 
                handleOnSubmit={handleOnSubmit} 
                form={form}
                isLoading={isLoading}
            />
        </div>
    )
}