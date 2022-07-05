import * as React from "react"
import { Link } from "react-router-dom"

export default function LoginForm(props) {
    return (
        <div className="login-form">
                <h2>Login</h2>
                <br />
                <div className="form">
                    <div className="form-input">
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="user@gmail.com" 
                            value={props.form.email}
                            onChange={props.handleOnInputChange} 
                        />
                    </div>
                    <div className="form-input">
                        <label for="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="password" 
                            value={props.form.password}
                            onChange={props.handleOnInputChange}
                        />
                    </div>
                    <button className="btn" disabled={props.isLoading} onClick={props.handleOnSubmit}>
                        {props.isLoading ? "Loading..." : "Login"}
                    </button>
                </div>
                <div className="footer">
                    <p>
                        Don't have an account? Sign up <Link to="/register">here</Link>
                    </p>
                </div>
            </div>
    )
}