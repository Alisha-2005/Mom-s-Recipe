import {createContext  , useState} from 'react'


export const RecipeContext =createContext()

export const RecipeProvider = ({children }) => {
    const [recipes, setRecipes] = useState([
        {
            name: 'Pasta',
            contributor: 'Mom',
            origin: 'Italy',
            description: 'A classic Italian dish made with love.',
            ingredients: ['Pasta', 'Tomato Sauce', 'Cheese']
        },
        {
            name: 'Samosa',
            contributor: 'Grandma',
            origin: 'India',
            description: 'A crispy snack filled with spiced potatoes.',
            ingredients: ['Potatoes', 'Spices', 'Dough']
        }   
    ])
     return (
        <RecipeContext.Provider value={{ recipes,setRecipes}}>
            {children}
        </RecipeContext.Provider>
     )
}