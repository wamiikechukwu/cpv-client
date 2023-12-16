import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',  
    element: <Signin />,
    errorElement: <Error />,
    children: [
      { path: '/signin', element: <Signin /> },
      { path: '/signup', element: <Signup /> }
    ]
  }


])

function App() {
  return <RouterProvider router={router} />
}

export default App
