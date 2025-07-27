import { use } from 'react'
import '../index.css'
import { useState } from 'react'

export default function Main(params) {
const [ingredients,setIngredients] = useState([])

const ingredientElements=ingredients.map((item)=>{
    return <li key={item}>{item}</li>
})
function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
}

    return(
        <main>
            <form className="add-ingredient-form"  action={handleSubmit}>
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