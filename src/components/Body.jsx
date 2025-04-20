import React from 'react'
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "../components/ClaudeRecipe"
import { getRecipeFromChefClaude } from '../../ai'

export default function Main() {
    const [ingredients, setIngredients] = React.useState([
        "Tomato", "Basil", "Oranges", "Cheese", "Bread"
    ])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection !== null) {
            recipeSection.current.scrollIntoView() 
        }
    }, [recipe])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")

        if (newIngredient != "") {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }
    async function getRecipe() {
        // Prompt claude with API call
        setRecipe(await getRecipeFromChefClaude(ingredients))

    }



    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input
                    aria-label="Add Ingredient"
                    type="text"
                    placeholder="e.g. Oregano"
                    name="ingredient"
                />
                <button>+ Add ingredient</button>

            </form>
            {ingredients.length > 0 ?
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
                : null}
            {/* Claude recipe markdown is rendered when recipe state is populated */}
            {recipe != "" ? <ClaudeRecipe recipe={recipe} /> : null}

        </main>
    )



}