import { useState } from 'react'
import RecipeCard from './components/RecipeCard'
import './App.css'

function App() {

  const [searchQuery,setSearchQuery] = useState('');

  const [recipes] = useState([
    {
      name: "Chole Bhature",
      contributor: "Mom",
      origin: "Delhi",
      description: "Spicy chickpeas with fried bread.",
      ingredients: "Chickpeas, flour, spices"
    },
    {
      name: "Idli Sambhar",
      contributor: "Grandma",
      origin: "Tamil Nadu",
      description: "Steamed rice cakes with lentil stew.",
      ingredients: "Rice, lentils, curry leaves"
    },
    {
      name: "Paneer Butter Masala",
      contributor: "Mom",
      origin: "Punjab",
      description: "Creamy tomato curry with paneer.",
      ingredients: "Paneer, tomato, cream, spices"
    },
    {
      name: "Aloo Paratha",
      contributor: "Mom",
      origin: "Punjab",
      description: "Stuffed flatbread with spiced mashed potatoes.",
      ingredients: "Wheat flour, Boiled potatoes, Onion, Spices"
    },
    {
      name: "Rasogolla",
      contributor: "Grandma",
      origin: "West Bengal",
      description: "Soft sweet balls in sugar syrup.",
      ingredients: "Chenna, Sugar, Water, Cardamom"
    }
  ])

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (Array.isArray(recipe.ingredients) && recipe.ingredients.some((ing)=>ing.toLowerCase().includes(searchQuery.toLowerCase()))) ||
    recipe.origin.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif'}}>
      <h1> 📖 Recipes</h1>

      <input 
         type = 'text'
         placeholder = 'Search for recipes...'
         value={searchQuery}
         onChange={(e)=> setSearchQuery(e.target.value)}
         className='search-input'
      />

      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}

      {/* {recipes.map((recipe, index)=>(
        <RecipeCard key = {index} {...recipe} />
      ))}  */}
    </div>
  )
}

export default App
