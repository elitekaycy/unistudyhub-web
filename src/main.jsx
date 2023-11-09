import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './Context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={AppRouter}/>
    <Toaster position="top-center"/>
    </AuthProvider>
  </React.StrictMode>,
)
