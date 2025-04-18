import { useState } from 'react'
import RecipeCard from './components/RecipeCard'
import './App.css'

function App() {

  const recipes = [
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
    }
  ]

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif'}}>
      <h1> 📖My Family Recipes</h1>
      {recipes.map((recipe, index)=>(
        <RecipeCard key = {index} {...recipe} />
      ))} 
    </div>
  )
}

export default App
