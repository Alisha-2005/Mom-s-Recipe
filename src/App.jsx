import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AddRecipe from './pages/AddRecipe'
import About from './pages/About'
import Recipes from './pages/Recipes'
import { RecipeProvider } from './context/RecipeContext'
import { useContext } from 'react'
import { RecipeContext } from './context/RecipeContext'
import './App.css'

function App() {
  const { recipes } = useContext(RecipeContext)
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/recipes">Recipes</Link> |{' '}
        <Link to="/add">Add Recipe</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
