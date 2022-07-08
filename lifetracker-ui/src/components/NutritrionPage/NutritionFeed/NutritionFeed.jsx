import NutritionCard from "../NutritionCard/NutritionCard"

export default function NutritionFeed(props) {
    // receives nutritions (array of nutrition items)
    // if nutritions is an empty array, it will display a message saying "Nothing here yet"
    // in an element with the className of empty-message
    // if nutritions has items in it, display a NutritionCard.jsx for each item in the array

    return (
        <div className="nutrition-feed">
            {props?.nutritions?.length > 0 ? (
                props.nutritions.map((nutrition) => {
                    return (
                        <NutritionCard
                            //key = {nutrition.id}
                            nutrition = {nutrition}
                        />
                    )
                })
          ) : (
            <div className="empty-message">
                Nothing here yet
            </div>
          )}
        </div>
    )
}