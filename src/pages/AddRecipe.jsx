import { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import './AddRecipe.css';
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    contributor: '',
    origin: '',
    description: '',
    ingredients: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.contributor) newErrors.contributor = 'Contributor is required';
    if (!formData.origin) newErrors.origin = 'Origin is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.ingredients) newErrors.ingredients = 'Ingredients are required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const newRecipe = {
        ...formData,
        ingredients: formData.ingredients.split(',').map((i) => i.trim()),
      };

      await addRecipe(newRecipe);
      navigate('/recipes'); // Redirect to recipes page
    }
  };

  return (
    <div className="add-recipe-container">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Contributor:
          <input name="contributor" value={formData.contributor} onChange={handleChange} />
          {errors.contributor && <span className="error">{errors.contributor}</span>}
        </label>

        <label>
          Origin:
          <input name="origin" value={formData.origin} onChange={handleChange} />
          {errors.origin && <span className="error">{errors.origin}</span>}
        </label>

        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
          {errors.description && <span className="error">{errors.description}</span>}
        </label>

        <label>
          Ingredients (comma separated):
          <input name="ingredients" value={formData.ingredients} onChange={handleChange} />
          {errors.ingredients && <span className="error">{errors.ingredients}</span>}
        </label>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
