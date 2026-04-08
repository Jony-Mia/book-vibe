import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@/component/Home/Home'
import About from '@/component/About/About'
import Blog from '@/component/Blog/Blog'
import User from './component/User/User'
import { UserData } from './API/api.js'
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, element: <Home/> },

      {
        path: "/about",
        element: <About/>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "/user/:id",
        element: <User/>,
        loader: async ({params})=>{
         let res = UserData(params.id)
          return res
        }
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
