import { use } from 'react'
import '../index.css'
import { useState } from 'react'

export default function Main(params) {
const ingredients = ["Chicken", "Oregano", "Tomatoes"]

const ingredientElements=ingredients.map((item)=>{
    return <li key={item}>{item}</li>
})
function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log("Form sub")
}

    return(
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name='ingredient'
                />
                <button >Add ingredient</button>
            </form>
            <ul>
                 {ingredientElements}
            </ul>
        </main>
    )
}