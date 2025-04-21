import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
// import './Recipes.css';

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

      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}

export default Recipes;
