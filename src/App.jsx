import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signin } from './pages/signin'
import Signup from './pages/signup'
import DashboardLayout from './components/layouts/dashboard_layout'

import Error from './pages/Error'
import Dashboard from './pages/dashboard'
import { FiAirplay } from "react-icons/fi";
import { FiCommand } from "react-icons/fi";
import { FiFeather } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";
import { FiLoader } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import axios from 'axios'
import { sideBarStyles } from './components/libs/styles/styles.tailwind'
import { CreatePV } from './pages/create_pv'
sideBarStyles

const items = [
  { label: 'Home', icon: <FiAirplay className={sideBarStyles.navIcon} />, link: '' },
  { label: 'Create PV', icon: <FiCommand className={sideBarStyles.navIcon} />, link: 'create' },
  { label: 'Approve PV', icon: <FiFeather className={sideBarStyles.navIcon} />, link: 'approve' },
  { label: 'Account', icon: <FiCpu className={sideBarStyles.navIcon} />, link: '/account', },
  { label: 'Help', icon: <FiLoader className={sideBarStyles.navIcon} />, link: '/help' },
  { label: 'Sign Out', icon: <FiKey className={sideBarStyles.navIcon} />, link: 'sign-out' }
]

const router = createBrowserRouter([
  {
    path: '/signin', element: <Signin />
  },
  {
    path: '/signup', element: <Signup />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout sidebarItems={items} />,
    children: [
      { path: '', element: <Dashboard label={'Home'} /> },
      { path: 'create', element: <CreatePV label={'Create Payment Voucher'}/> },


    ]
  }



])

function App() {

  axios.defaults.baseURL = 'http://127.0.0.1:5000/api'

  return (<RouterProvider router={router} />)
}

export default App
