import { Outlet, ScrollRestoration } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { useState, createContext } from "react";
import Footer from "./components/Footer";

export const ShoppingContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

const App = () => {
  const [nightMode, setNightMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...item, amount: 1 }]);
  };

  const switchNightMode = () => {
    setNightMode((prevNightMode) => !prevNightMode);
  };

  return (
    <main
      className={`${
        nightMode && "dark"
      } bg-background text-foreground  w-full min-h-screen  overflow-auto`}
    >
      <ScrollRestoration />
      <ShoppingContext.Provider value={{ cartItems, addToCart }}>
        <NavigationBar
          nightMode={nightMode}
          switchNightMode={switchNightMode}
        />
        <Outlet />
        <Footer />
      </ShoppingContext.Provider>
    </main>
  );
};

export default App;
