import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@/component/Home'
import About from '@/component/About'
import Blog from '@/component/Blog'
import User from './component/User.jsx'
import { UserData } from './API/api.js'
import Form from './Form.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, element: <Home/> },

      {
        path: "/listed",
        element: <About/>
      },
      {
        path: "read",
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
