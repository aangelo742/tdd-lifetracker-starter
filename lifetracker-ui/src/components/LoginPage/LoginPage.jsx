import * as React from "react"
import "../LoginPage/LoginPage.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import apiClient from "../../../services/apiClient"
import LoginForm from "./LoginForm/LoginForm"

export default function LoginPage(props) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: "",
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

        const { data, error } = await apiClient.loginUser({ email: form.email, password: form.password })
        if (error) setErrors((e) => ({ ...e, form: error }))
        if (data?.user) {
          props.setUser(data.user)
          apiClient.setToken(data.token)
          setIsLoading(false)
          props.setLoggedIn(true)
          navigate("/activity")
        }
      }


    return (
        <div className="login-page">
            <LoginForm 
              form = {form} 
              handleOnInputChange = {handleOnInputChange}
              handleOnSubmit = {handleOnSubmit}
              isLoading = {isLoading}
              
              />
        </div>
    )
}