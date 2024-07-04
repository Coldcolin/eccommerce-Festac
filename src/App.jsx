import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home"
import Categories from './pages/categories/Categories';
import Layout from './components/Layout/Layout';
import Detail from './pages/Detail/Detail';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Post from './pages/Post/Post';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/categories",
        element: <Categories/>
      },
      {
        path: "/detail/:id",
        element: <Detail/>
      },
      {
        path: "/Category/:categoryId",
        element: <Products/>
      },
      {
        path: "/Cart",
        element: <Cart/>
      },
      {
        path: "/post",
        element: <Post/>
      }
    ]
  },
  
]);

function App() {

  return(
    <RouterProvider router={router} />
  )
  
}

export default App
