import { useState, createContext } from "react";

export const FavoritesContext = createContext({
  favoriteProducts: [],
  toggleFavorite: () => {},
  isFavorite: () => {},
});

export function FavoritesProvider({ children }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const toggleFavorite = (productId) => {};

  const isFavorite = (productId) => {};

  return (
    <FavoritesContext.Provider>
      value=
      {{
        favoriteProducts,
        toggleFavorite,
        isFavorite,
      }}
      {children}
    </FavoritesContext.Provider>
  );
}
