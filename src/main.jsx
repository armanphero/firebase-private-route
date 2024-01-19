import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthComponent from './components/AuthComponent.jsx';
import Order from './components/Order.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/orders',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthComponent>
    <RouterProvider router={router} />
  </AuthComponent>
)
