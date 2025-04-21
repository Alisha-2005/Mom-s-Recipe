import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RecipeCard({ id, name, contributor, origin, description, ingredients }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/recipes/${id}`);
      navigate('/recipes');  
    } catch (err) {
      console.error('Error deleting recipe:', err);
    }
  };

  return (
    <div className="recipe-card">
      <h3>{name}</h3>
      <p>Contributor: {contributor}</p>
      <p>Origin: {origin}</p>
      <p>Description: {description}</p>
      <p>Ingredients: {ingredients.join(', ')}</p>
      <button onClick={() => navigate(`/edit-recipe/${id}`)}>Edit Recipe</button>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
}

export default RecipeCard;
