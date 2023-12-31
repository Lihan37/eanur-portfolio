import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Home/Home";

import Main from "../layout/Main";
import AboutMe from "../Home/AboutMe";
import Education from "../Home/education";
import Skills from "../Home/Skills";
import ContactMe from "../Home/ContactMe";
import Projects from "../Home/Projects";
import Experience from "../Home/Experience";

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
        },
        {
          path: '/about',
          element: <AboutMe></AboutMe>
        },
        {
          path: '/education',
          element: <Education></Education>
        },
        {
          path: '/skills',
          element: <Skills></Skills>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
        {
          path: '/experience',
          element: <Experience></Experience>
        }
      ]
    }
    
  ]);