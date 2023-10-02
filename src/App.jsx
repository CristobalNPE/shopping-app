import { createContext, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { roundNumber } from "./utils/utils";
import { discounts } from "./utils/discounts";

export const ShoppingContext = createContext({
  cartItems: [],
  addToCart: () => {},
  getTotalItemsInCart: () => {},
  increaseItemAmount: () => {},
  decreaseItemAmount: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
  applyDiscount: () => {},
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

  const emptyCart = () => {
    setCartItems([]);
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

  const applyDiscount = (code) => {
    const subtotal = roundNumber(
      cartItems.map((item) => item.total).reduce((x, y) => x + y, 0)
    );

    let discountTotal = 0;
    let total = subtotal;
    const discount = discounts.find((d) => d.code === code);
    if (discount !== undefined) {
      discountTotal = roundNumber((subtotal * discount.discountPercent) / 100);
      total = roundNumber(subtotal - discountTotal);
    }
    return { discountTotal, total };
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
          emptyCart,
          applyDiscount,
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
