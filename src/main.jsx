import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Education from './Components/Education/Education.jsx'

{/* <Routes>
  <Route path="" element={<Home/>}/>
  <Route path="education" Component={<Education/>}/>

</Routes> */}
const router=createBrowserRouter(
  createRoutesFromElements(
     <>
       <Route path='' element={<App/>}/>
       <Route path="education" element={<Education/>}/>
     </>
     

    
  )
 
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    
   <RouterProvider router={router}>
    <App/>
   </RouterProvider>
  </StrictMode>,
)
