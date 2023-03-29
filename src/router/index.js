import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/Home'))
const Detail = React.lazy(() => import('@/views/Detail'))
const Entire = React.lazy(() => import('@/views/Entire'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  }, 
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  }
]

export default routes