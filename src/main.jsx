import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './MainLayout.jsx';
import Home from './HomePage/Home/Home';
import AuthProvider from './providers/AuthProvider';
import Login from './pages/Login/Login';
import Signup from './pages/Singup/Signup';
import Erronpage from './pages/Erronpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {path: '/', element: <Home></Home>},
      {path: '/login', 
    element: <Login></Login>},
    {path: '/signup', 
    element: <Signup></Signup>},
    ],
  },
  {
    path: '*',
    element: <Erronpage></Erronpage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
