import React from 'react'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Inicio from './pages/Inicio'
import Portafolio from './pages/Portafolio'
import Error from './components/Error'


const router = createBrowserRouter([

  { path: '/',
   element: <Inicio/>,
  errorElement: <Error/>
  },

  { 
    path: '/portafolio', 
    element: <Portafolio/>, 
    errorElement: <Error/>
  },

])




  
export default function App() {
  return (
    <RouterProvider router={router}>
     <></>
    </RouterProvider>
  )
}