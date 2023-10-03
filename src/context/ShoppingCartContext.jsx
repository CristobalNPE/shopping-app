import { createContext, useState } from "react";
import { roundNumber } from "../utils/utils";
import { discounts } from "../utils/discounts";

export const ShoppingCartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  getTotalItemsInCart: () => {},
  increaseItemAmount: () => {},
  decreaseItemAmount: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
  applyDiscount: () => {},
});

export function ShoppingCartProvider({ children }) {
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
      cartItems.map((item) => item.total).reduce((x, y) => x + y, 0),
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

  return (
    <ShoppingCartContext.Provider
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
      {children}
    </ShoppingCartContext.Provider>
  );
}
