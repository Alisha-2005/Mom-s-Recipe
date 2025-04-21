import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Recipes.css';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch recipes from JSON Server
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data);
      } catch (err) {
        setError('Failed to load recipes. Please make sure JSON Server is running.');
        console.error('Error fetching recipes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Delete a recipe from the server and state
  const deleteRecipe = async (id) => {
    try {
      console.log(`Attempting to delete recipe with id: ${id}`); // Debugging log
      await axios.delete(`http://localhost:3001/recipes/${id}`);
      setRecipes(recipes.filter((recipe) => recipe.id !== id)); // Remove recipe from state
      console.log(`Recipe with id: ${id} deleted`); // Debugging log
    } catch (err) {
      setError('Failed to delete recipe. Please try again.');
      console.error('Error deleting recipe:', err);
    }
  };

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (Array.isArray(recipe.ingredients) &&
      recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(searchQuery.toLowerCase())
      ))
  );

  // Show loading or error messages
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="recipes-container">
      <h2>All Recipes</h2>

      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3><strong>{recipe.name}</strong></h3>
              <p><strong>Origin: </strong>{recipe.origin}</p>
              <p>{recipe.description}</p>
              <ul className="ingredients">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}><strong>{ingredient}</strong></li>
                ))}
              </ul>
              <button className="btn">Edit Recipe</button>
              {/* Delete Button */}
              <button className="delete-btn" onClick={() => deleteRecipe(recipe.id)}>
                Delete Recipe
              </button>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Recipes;
