import React, { useContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AddRecipe from './pages/AddRecipe'
import About from './pages/About'
import Recipes from './pages/Recipes'
import EditRecipe from './pages/EditRecipe'
import { RecipeProvider, RecipeContext } from './context/RecipeContext'
import './App.css'

function App() {
  const { recipes } = useContext(RecipeContext)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
        <Link to="/recipes" style={{ margin: '0 1rem' }}>Recipes</Link>
        <Link to="/add" style={{ margin: '0 1rem' }}>Add Recipe</Link>
        <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/edit/:id" element={<EditRecipe />} /> {/* EditRecipe route */}
      </Routes>
    </div>
  )
}


export default function AppWrapper() {
  return (
    <RecipeProvider>
      <App />
    </RecipeProvider>
  )
}
