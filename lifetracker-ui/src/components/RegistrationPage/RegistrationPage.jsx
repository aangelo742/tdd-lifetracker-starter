import * as React from "react"
import "../RegistrationPage/RegistrationPage.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import RegistrationForm from "./RegistrationForm/RegistrationForm"
import apiClient from "../../../services/apiClient"

export default function RegistrationPage(props) {
    const [form, setForm] = useState({
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: "",    
    })
    
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
            if (event.target.value.indexOf("@") === -1) {
                setErrors ((e) => ({ ...e, email: "Please enter a valid email."}))
            } else {
                setErrors((e) => ({ ...e, email: null}))
            }
        }
        if (event.target.name === "password") {
            if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
              setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
            } else {
              setErrors((e) => ({ ...e, passwordConfirm: null }))
            }
          }
          if (event.target.name === "passwordConfirm") {
            if (form.password && form.password !== event.target.value) {
              setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
            } else {
              setErrors((e) => ({ ...e, passwordConfirm: null }))
            }
          }

          setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsLoading(true)
        setErrors((e) => ({ ...e, form: null}))

        if (form.passwordConfirm !== form.password) {
            setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match."}))
            setIsLoading(false)
            return
        } else {
            setErrors((e) => ({ ...e, passwordConfirm: null }))
        }

        const { data, error } = await apiClient.signupUser({ username: form.username, password: form.password, firstName: form.firstName, lastName: form.lastName, email: form.email})
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
        <div className="registration-page">
            <RegistrationForm
                handleOnSubmit = {handleOnSubmit}
                handleOnInputChange = {handleOnInputChange}
                isLoading = {isLoading}
                errors = {errors}
                form = {form}
                
            />
        </div>
    )
}