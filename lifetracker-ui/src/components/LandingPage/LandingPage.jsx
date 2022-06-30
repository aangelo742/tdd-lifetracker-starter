import * as React from "react"
import "../LandingPage/LandingPage.css"

export default function LandingPage(props) {
    return (
        <div class="Landing">
            <div class="hero">
                <img src="../../../assets/smartwatch-screen-digital-device.e2983a85.svg" alt="hero img" />
                <h1>Life Tracker</h1>
                <p>Helping you take back control of your world</p>
            </div>
            <div class="tiles">
                <div class="tile">
                    <img src="../../../assets/icons-workout-48.4f4cdb05.svg" alt="Fitness" />
                    <p>Fitness</p>
                </div>
                <div class="tile">
                    <img src="../../../assets/icons8-porridge-100.132d2715.svg" alt="Food" />
                    <p>Food</p>
                </div>
                <div class="tile">
                    <img src="../../../assets/icons8-resting-100.81067336.svg" alt="Rest" />
                    <p>Rest</p>
                </div>
                <div class="tile">
                    <img src="../../../assets/icons8-planner-100.997ca54c.svg" alt="Planner" />
                    <p>Planner</p>
                </div>
            </div>
        </div>
    )
}