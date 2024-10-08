import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='' element={<App/>}/>
    </>
   
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
     
    </RouterProvider>
  </StrictMode>,
)
