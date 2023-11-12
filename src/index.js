import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './Root';
import About from './Components/About';
import { RouterProvider, createHashRouter } from "react-router-dom"


const router = createHashRouter([
  {
      path: "/",
      element: <Root />,
      children: [
          {
              path: "/",
              element: <App />,
          },
          {
              path: "/about",
              element: <About />,
          },
      ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(    
      <RouterProvider router={router} />    
)
