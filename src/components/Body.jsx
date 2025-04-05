import React from 'react'
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "../components/ClaudeRecipe"
import { getRecipeFromChefClaude } from '../../ai'

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")

        if (newIngredient != "") {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }
    function getRecipe() {
        setRecipe(() => getRecipeFromChefClaude(ingredients)) // Prompt claude with API call
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
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
                : null}
            {/* Claude recipe markdown is rendered when recipe state is populated */}
            {recipe != "" ? <ClaudeRecipe recipe = {recipe} /> : null}  

        </main>
    )



}