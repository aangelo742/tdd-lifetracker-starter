import * as React from "react"
import { Link } from "react-router-dom"

export default function RegistrationForm(props) {
    return (
        <div className="card">
                <h2>Register</h2>

                {props.errors.form && <span className="error">{props.errors.form}</span>}
                <br/>
                <div className="form">
                    <div className="input-field">
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter a valid email"
                            value={props.form.email}
                            onChange={props.handleOnInputChange} 
                        />
                        {props.errors.email && <span className="error">{props.errors.email}</span>}
                    </div>
                    <div className="input-field">
                        <label for="username">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="your_username" 
                            value={props.form.username}
                            onChange={props.handleOnInputChange}
                            />
                    </div>
                        {props.errors.username && <span className="error">{props.errors.username}</span>}
                    <div className="split-input-field">
                        <div className="input-field">
                            <input 
                                type="text" 
                                name="firstName" 
                                placeholder="First Name" 
                                value={props.form.firstName}
                                onChange={props.handleOnInputChange} 
                            />
                            {props.errors.firstName && <span className="error">{props.errors.firstName}</span>}
                        </div>
                        <div className="input-field">
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="Last Name" 
                                value={props.form.lastName}
                                onChange={props.handleOnInputChange} 
                            />
                            {props.errors.lastName && <span className="error">{props.errors.lastName}</span>}
                        </div>
                    </div>
                    <div className="input-field">
                        <label for="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter a secure password" 
                            value={props.form.password}
                            onChange={props.handleOnInputChange}
                        />
                        {props.errors.password && <span className="error">{props.errors.password}</span>}
                    </div>
                    <div className="input-field">
                        <label for="passwordConfirm">Confirm Password</label>
                        <input 
                            type="password" 
                            name="passwordConfirm" 
                            placeholder="Confirm your password" 
                            value={props.form.passwordConfirm}
                            onChange={props.handleOnInputChange}
                        />
                        {props.errors.passwordConfirm && <span className="error">{props.errors.passwordConfirm}</span>}
                    </div>
                    <button className="btn" disabled={props.isLoading} onClick={props.handleOnSubmit}>
                        {props.isLoading ? "Loading..." : "Create Account"}
                    </button>
                </div>
                <div className="footer">
                    <p>Already have an account? Login <Link to="/login">here</Link></p>
                </div>
            </div>
    )
}