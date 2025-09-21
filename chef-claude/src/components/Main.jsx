import '../index.css'
import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from '../ai'
import { useRef ,useEffect} from 'react'


export default function Main(params) {
const [ingredients,setIngredients] = useState([])


function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
}

const [recipe,setrecipe]=useState("")
const recipeSecion=useRef(null)
console.log(recipeSecion)

useEffect(() => {
    if(recipe!==""&& recipeSecion.current!==null){
    // recipeSecion.current.scrollIntoView()
    const yCoord = recipeSecion.current.getBoundingClientRect().top
window.scroll({
    top: yCoord,
    behavior: "smooth"
})

    }
}, [recipe]);

async function getRecipe(){
  const generatedRecipe=await getRecipeFromMistral(ingredients)
  setrecipe(generatedRecipe)
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
            { ingredients.length>0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} ref={recipeSecion}/>}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}