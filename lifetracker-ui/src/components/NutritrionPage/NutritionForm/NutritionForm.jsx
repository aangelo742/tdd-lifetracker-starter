import * as React from "react"
import "./NutritionForm.css"
import { Link } from "react-router-dom"

export default function NutritionForm(props) {
   return (
    <div class="nutrition-form">
        <div class="form-input">
            <label for="name">Name</label>
            <input 
                type="text" 
                name="name" 
                placeholder="Nutrition name" 
                value={props.form.name}
                onChange={props.handleOnInputChange} 
            />
        </div>
        <div class="form-input">
            <label for="category">Category</label>
            <input 
                type="text" 
                name="category" 
                placeholder="Nutrition category" 
                value={props.form.category}
                onChange={props.handleOnInputChange}
            />
        </div>
        <div class="split-input-field">
            <div class="form-input">
                <label for="quantity">Quantity</label>
                <input 
                    type="number" 
                    name="quantity" 
                    min="1" 
                    max="100000000" 
                    value={props.form.quantity}
                    onChange={props.handleOnInputChange} 
                />
            </div>
            <div class="form-input">
                <label for="calories">Calories</label>
                <input 
                    type="number" 
                    name="calories" 
                    min="0" 
                    max="10000000000" 
                    step="10" 
                    value={props.form.calories}
                    onChange={props.handleOnInputChange} 
                />
            </div>
        </div>
        <div class="form-input">
            <label for="imageUrl">Image URL</label>
            <input 
                type="text" 
                name="imageUrl" 
                placeholder="http://www.food-image.com/1" 
                value={props.form.imageUrl}
                onChange={props.handleOnInputChange}
            />
        </div>
        <button className="btn" disabled={props.isLoading} onClick={props.handleOnSubmit}>
                        {props.isLoading ? "Loading..." : "Submit"}
        </button>
        <Link to="/nutrition/">
            <button>Go back</button>
        </Link>
    </div>
   )
}