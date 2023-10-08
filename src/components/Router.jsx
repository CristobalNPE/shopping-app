import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import CartPage from "../pages/CartPage";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },

        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <ProductDetails />,
        },
        {
          path: "*",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
