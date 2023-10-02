import { createContext, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { roundNumber } from "./utils/utils";

export const ShoppingContext = createContext({
  cartItems: [],
  addToCart: () => {},
  getTotalItemsInCart: () => {},
  increaseItemAmount: () => {},
  decreaseItemAmount: () => {},
  removeFromCart: () => {},
});

const App = () => {
  const [nightMode, setNightMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...item, amount: 1, total: item.price },
    ]);
  };
  //removeFromCart
  const removeFromCart = (itemId) => {
    let updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        return null;
      }
      return cartItem;
    });
    updatedCartItems = updatedCartItems.filter((item) => item !== null);
    setCartItems(updatedCartItems);
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
    let updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        if (cartItem.amount > 1) {
          return {
            ...cartItem,
            amount: cartItem.amount - 1,
            total: roundNumber(cartItem.total - cartItem.price),
          };
        } else {
          return null;
        }
      }
      return cartItem;
    });
    updatedCartItems = updatedCartItems.filter((item) => item !== null);
    setCartItems(updatedCartItems);
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
          decreaseItemAmount,
          removeFromCart,
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
