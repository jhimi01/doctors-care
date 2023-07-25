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
import Doctors from './HomePage/Doctors/Doctors';
import Doctor from './pages/Doctor/DoctorRoute';
import DoctorRoute from './pages/Doctor/DoctorRoute';
import Treatments from './pages/Treatments/Treatments';
// import { Lines } from 'react-preloaders';
import PricateRoute from './routes/PricateRoute';

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
    {
      path: '/docotors',
      element: <PricateRoute><DoctorRoute></DoctorRoute></PricateRoute>
    },{
      path: '/treatments',
      element: <Treatments></Treatments>
    }
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
      {/* <Lines color={'#f17732'} /> */}
  </AuthProvider>
  </React.StrictMode>,
)
