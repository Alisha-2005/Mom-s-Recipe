import {createContext  , useState , useEffect} from 'react'
import axios from 'axios'

export const RecipeContext =createContext()

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      axios.get('http://localhost:3001/recipes')
        .then((res) => {
          setRecipes(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching recipes:', err);
          setError('Could not fetch recipes');
          setLoading(false);
        });
    }, []);
  
    const addRecipe = async (newRecipe) => {
      try {
        const res = await axios.post('http://localhost:3001/recipes', newRecipe);
        setRecipes((prev) => [...prev, res.data]);
      } catch (err) {
        console.error('Error adding recipe:', err);
      }
    };
     return (
        <RecipeContext.Provider value={{ recipes,setRecipes,loading,error,addRecipe }}>
            {children}
        </RecipeContext.Provider>
     )
}