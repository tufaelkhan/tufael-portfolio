import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home/Home';
import MyProject from './components/MyProject/MyProject';
import About from './components/Home/Home/About';
import Contact from './components/Home/Home/Contact';
import Skills from './components/skills/Skills';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/myproject',
        element: <MyProject></MyProject>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/skills',
        element: <Skills></Skills>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto bg-slate-900 text-white'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
