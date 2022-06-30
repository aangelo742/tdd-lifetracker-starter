import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar"
import LandingPage from  "../LandingPage/LandingPage"
import LoginPage from "../LoginPage/LoginPage"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import SleepPage from "../SleepPage/SleepPage"
import ExercisePage from "../ExercisePage/ExercisePage"
import ActivityPage from "../ActivityPage/ActivityPage"
import NutritionPage from "../NutritrionPage/NutritionPage"
import NotFound from "../NotFound/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [appState, setAppState] = useState({})

  return (
    <div className="app">
      <React.Fragment>
        {/* YOUR CODE HERE! */}
        <BrowserRouter>
          <Navbar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />

          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/login" element={<LoginPage  setLoggedIn={setLoggedIn} />}/>
            <Route path="/register" element={<RegistrationPage setLoggedIn={setLoggedIn} />}/>
            <Route path="/activity" element={loggedIn ? <ActivityPage /> : <LoginPage  setLoggedIn={setLoggedIn} />}/>
            <Route path="/sleep" element={loggedIn ? <SleepPage /> : <LoginPage  setLoggedIn={setLoggedIn} />}/>
            <Route path="/exercise" element={loggedIn ? <ExercisePage /> : <LoginPage  setLoggedIn={setLoggedIn} />}/>
            <Route path={loggedIn ? "/nutrition" : "*"} element={loggedIn ? <NutritionPage /> : <LoginPage  setLoggedIn={setLoggedIn} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
