import React from 'react'

function RecipeCard  ({name,contributor,origin,description,ingredients})  {

    const ingredientList = ingredients.split(',').map(item => item.trim());
  return (
    <div style={{
        border: '1px solid black',
        pading : '1rem',
        margin : ' 1rem',
        borderRadius : '8px',
        background:'#fff',
    }}>
        <h2>{name}</h2>
        <p><strong>By:</strong>{contributor}</p>
        <p><strong>origin:</strong>{origin}</p>
        <p><strong>Description:</strong>{description}</p>

        <div>
            <strong>Ingredients:</strong>

                <ul>
                    {ingredientList.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
        </div>
    </div>
  )
}

export default RecipeCard