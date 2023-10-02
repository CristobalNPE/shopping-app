import { Outlet, ScrollRestoration } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { useState, createContext, useEffect } from "react";
import Footer from "./components/Footer";
import { roundNumber } from "./utils/utils";

export const ShoppingContext = createContext({
  cartItems: [],
  addToCart: () => {},
  getTotalItemsInCart: () => {},
  increaseItemAmount: () => {},
  getItemFromCart: () => {},
});

const App = () => {
  const [nightMode, setNightMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  //separate add to cart and increase/decrease amount
  const addToCart = (item) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...item, amount: 1, total: item.price },
    ]);
  };

  const getItemFromCart =  (itemId) => {
    return  cartItems.find((i) => i.id === itemId);
  };

  const increaseItemAmount = (itemId) => {
    let updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        return {
          ...cartItem,
          amount: cartItem.amount + 1,
          total: roundNumber(cartItem.total + cartItem.price),
        };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
  };
  const decreaseItemAmount = (itemId) => {
    // let updatedCartItems = cartItems.map((cartItem) => {
    //   if (cartItem.id === itemId) {
    //     return { ...cartItem, amount: cartItem.amount + 1 };
    //   }
    //   return cartItem;
    // });
    // setCartItems(updatedCartItems);
  };

  const getTotalItemsInCart = () => {
    let itemAmounts = cartItems.map((i) => i.amount);
    let total = itemAmounts.reduce((x, y) => x + y, 0);
    return total;
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
      <ShoppingContext.Provider
        value={{
          cartItems,
          addToCart,
          getTotalItemsInCart,
          increaseItemAmount,
          getItemFromCart,
        }}
      >
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
