import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signin } from './pages/signin'
import Signup from './pages/signup'
import DashboardLayout from './components/layouts/dashboard_layout'
import Error from './pages/Error'
import Dashboard from './pages/dashboard'

import axios from 'axios'


const router = createBrowserRouter([
  { path: '/signin', element: <Signin /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <Dashboard /> }
    ]
  },
  { path: '/signup', element: <Signup /> }



])

function App() {

  axios.defaults.baseURL = 'http://127.0.0.1:5000/api'

  return (<RouterProvider router={router} />)
}

export default App
