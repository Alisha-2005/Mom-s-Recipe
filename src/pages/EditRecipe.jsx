import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditRecipe() {
  const { id } = useParams() // Get recipe id from URL
  const navigate = useNavigate() // Replaces useHistory in React Router v6
  const [recipe, setRecipe] = useState({
    name: '',
    contributor: '',
    origin: '',
    description: '',
    ingredients: ''
  })

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`)
        setRecipe(response.data)
      } catch (err) {
        console.error('Error fetching recipe:', err)
      }
    }

    fetchRecipe()
  }, [id])

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3001/recipes/${id}`, recipe)
      // After successful update, navigate back to the recipes page
      navigate('/recipes')
    } catch (err) {
      console.error('Error updating recipe:', err)
    }
  }

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Contributor:
          <input
            type="text"
            name="contributor"
            value={recipe.contributor}
            onChange={handleChange}
          />
        </label>
        <label>
          Origin:
          <input
            type="text"
            name="origin"
            value={recipe.origin}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Ingredients (comma-separated):
          <input
            type="text"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  )
}

export default EditRecipe
