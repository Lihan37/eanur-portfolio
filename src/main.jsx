import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='min-w-full min-h-screen bg-slate-900'>
    <React.StrictMode>
    
      <RouterProvider router={router} />
      
    </React.StrictMode>
  </div>
)
