export default function NutritionCard(props) {
    // props = nutrition
    return (
        <div className="nutrition-card">
            <div className="nutrition-name">
                {props.nutrition.name}
            </div>
            <div className="nutrition-image">
                <img src={props.nutrition.imageUrl ? props.nutrition.imageUrl : ""}></img>
            </div>
            <div className="nutrition-calories">
                {props.nutrition.calories}
            </div>
            <div className="nutrition-category">
                {props.nutrition.category}
            </div>
            <div className="nutrition-date">
                {props.nutrition.createdAt}
            </div>
        </div>
    )
}