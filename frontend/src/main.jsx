import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Patient from './components/Patient.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/patient",
    element : <Patient/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App/>
  </RouterProvider>
)
