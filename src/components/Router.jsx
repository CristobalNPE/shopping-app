import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import CartPage from "../features/cart/routes/CartPage";
import Contact from "../features/misc/routes/Contact";
import ErrorPage from "../features/misc/routes/ErrorPage";
import Favorites from "../features/favorites/routes/Favorites";
import Home from "../features/misc/routes/Home";
import ProductDetails from "../features/products/routes/ProductDetails";
import Products from "../features/products/routes/Products";
import NotFound from "../features/misc/routes/NotFound";

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
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
