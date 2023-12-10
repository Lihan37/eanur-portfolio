import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Home/Home";
import ContactMe from "../Home/ContactMe";
import Main from "../layout/Main";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/contact',
          element: <ContactMe></ContactMe>
        }
      ]
    }
    
  ]);