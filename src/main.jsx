import React,{ StrictMode } from 'react'
import ReactDOM ,{ createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RecipeProvider } from './context/RecipeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipeProvider>
  </React.StrictMode>,
)
