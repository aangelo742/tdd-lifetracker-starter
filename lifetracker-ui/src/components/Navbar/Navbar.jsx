import * as React from "react"
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"
import apiClient from "../../../services/apiClient"

export default function Navbar(props) {
    const navigate = useNavigate()
    const handleOnLogout = async () => {
        await apiClient.logoutUser()
        props.setLoggedIn(false)
              
    }

    if(props.loggedIn) {
        return (
            <nav className="Navbar">
                <div className="content">
                    <div className="logo">
                        <Link to="/">
                            <img src="../../../assets/codepath.70a9a31f.svg" alt="logo"/>
                        </Link>
                    </div>
                    <ul className="links">
                        <li>
                            <Link to="/activity">
                                Activity
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/exercise">
                                Exercise
                            </Link>
                        </li>
                        <li>
                            <Link to="/nutrition">
                                Nutrition
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/sleep">
                                Sleep
                            </Link>
                        </li>
                        <li>
                            Welcome, {props.user.username}
                        </li>
                        <li className="secondary btn"  onClick={handleOnLogout}>
                            <Link to="/">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    } else if(!props.loggedIn) {
        return (
            <nav className="Navbar">
                <div className="content">
                    <div className="logo">
                        <Link to="/">
                            <img src="../../../assets/codepath.70a9a31f.svg" alt="logo"/>
                        </Link>
                    </div>
                    <ul className="links">
                        <li>
                            <Link to="/activity">
                                Activity
                            </Link>     
                        </li>
                        <li>
                            <Link to="/exercise">
                                Exercise
                            </Link>
                        </li>
                        <li>
                            <Link to="/nutrition">
                                Nutrition
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/sleep">
                                Sleep
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>               
                        </li>
                        <li className="btn secondary">
                            <Link to="/register">
                                Sign Up
                            </Link>
                            </li>
                    </ul>
                </div>
            </nav>
        )
    } else {
        return null;
    }
}
