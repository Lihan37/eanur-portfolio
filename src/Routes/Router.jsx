import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Home/Home";
import ContactMe from "../Home/ContactMe";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path: "/contact",
        element: <ContactMe></ContactMe>
    }
  ]);