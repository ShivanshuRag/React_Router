import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import { RouterProvider } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/AboutUs.jsx'
import Params from './components/Params/Params.jsx'
import Discord from './components/Discord/Discord.jsx'
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='Home' element={<Home/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='AboutUs' element={<About/>}/>
      <Route path='params/:userId' element={<Params/>}/>
      <Route path='Discord' element={<Discord/>}/>
    </Route>
     
    
    
    
  )
 )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
