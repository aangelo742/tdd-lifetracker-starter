import * as React from "react"
import "../ActivityPage/ActivityPage.css"

export default function ActivityPage(props) {
    return (
        <div className="ActivityPage">
            <div className="content">
                <div className="actions">
                    <h2 className="heading">Activity Feed</h2>
                    <div className="buttons">
                        <button className="Button outline small outline gold ">Add Exercise</button>
                        <button className="Button outline small outline blue ">Log Sleep</button>
                        <button className="Button outline small outline aqua ">Record Nutrition</button>
                    </div>
                </div>
                <div className="stats">
                    <div className="main">
                        <div className="SummaryStat large gold" style={{background: "gold"}}>
                            <div className="background">
                                <p>Total Exercise Minutes</p>
                                <h1>0</h1>
                                <svg height="100%" width="100%" viewBox="0 0 220 360">
                                    <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="SummaryStat large purple" style={{background: "purple"}}>
                            <div className="background">
                                <p>Avg Sleep Hours</p>
                                <h1>0</h1>
                                <svg height="100%" width="100%" viewBox="0 0 220 360">
                                    <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="SummaryStat large aqua" style={{background: "aqua"}}>
                            <div className="background">
                                <p>Avg Daily Calories</p>
                                <h1>0</h1>
                                <svg height="100%" width="100%" viewBox="0 0 220 360">
                                    <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h4>More Stats</h4>
                    <div className="more">
                        <div className="SummaryStat small teal" style={{background: "teal"}}>
                            <div className="background">
                                <p>Maximum Hourly Calories</p>
                                <h1>0</h1>
                                <svg width="100%">
                                    <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="SummaryStat small orange" style={{background: "orange"}}>
                            <div className="background">
                                <p>Avg Exercise Intensity</p>
                                <h1>0</h1>
                                <svg width="100%">
                                    <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="SummaryStat small red" style={{background: "red"}}>
                            <div className="background">
                                <p>Total Hours Slept</p>
                                <h1>0</h1>
                                <svg width="100%">
                                    <path fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.15)"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}