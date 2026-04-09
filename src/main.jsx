import { StrictMode, use } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@/page/Home'
import ListBook from '@/component/ListBook'
import Book from '@/component/Book'
import { ProductsAPI } from '@/context/AssetsContext.jsx'
import BookDetails from '@/component/BookDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, element: <Home/> },
      {
        path: "/listed",
        element: <ListBook/>
      },
      {
        path: "read",
        element: 'read boo from here'
      },
      {
        path: "/book/:bookId",
        element: <BookDetails/>,
        loader: async ({params})=>{
         let data = await fetch('/booksData.json');
         let res  = await data.json();
         let id   = Number(params.bookId);
         let details = res.find(d => d.bookId === id);
         
          return details;
        }
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
