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
import apiClient from "../../../services/apiClient"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  return (
      <div className="app">
        <React.Fragment>
          <BrowserRouter>
            <Navbar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} user={user}/>

            <Routes>
              <Route path="/" element={<LandingPage user={user}/>}/>
              <Route path="/login" element={<LoginPage  setLoggedIn={setLoggedIn}  user={user} setUser={setUser}/>}/>
              <Route path="/register" element={<RegistrationPage setLoggedIn={setLoggedIn}  user={user} setUser={setUser}/>}/>
              <Route path="/activity" element={loggedIn ? <ActivityPage user={user}/> : <LoginPage  setLoggedIn={setLoggedIn}  user={user} setUser={setUser}/>}/>
              <Route path="/sleep" element={loggedIn ? <SleepPage user={user}/> : <LoginPage  setLoggedIn={setLoggedIn}  user={user} setUser={setUser}/>}/>
              <Route path="/exercise" element={loggedIn ? <ExercisePage/> : <LoginPage  setLoggedIn={setLoggedIn}  user={user} setUser={setUser}/>}/>
              <Route path={loggedIn ? "/nutrition/*" : "*"} element={loggedIn ? <NutritionPage user={user}/> : <LoginPage  setLoggedIn={setLoggedIn}  user={user} setUser={setUser}/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </React.Fragment>
      </div>
  )
}
