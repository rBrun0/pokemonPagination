import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PokemonInfo from './pages/pokemonInfo/index.tsx'
import Main from './pages/Main/Main.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path:"/pokemoninfo",
    element:  <PokemonInfo/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      <App />
  </React.StrictMode>,
)
