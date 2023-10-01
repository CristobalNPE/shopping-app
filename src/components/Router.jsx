import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Catalog from "../pages/Catalog";
import Contact from "../pages/Contact";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/catalog",
          element: <Catalog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
        },
      ],
    },
    
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
