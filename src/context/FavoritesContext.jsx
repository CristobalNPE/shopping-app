import { useState, createContext } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => {},
});

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      const updatedFavorites = favorites.filter(
        (favorite) => favorite !== productId,
      );
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, productId];
      setFavorites(updatedFavorites);
    }
  };

  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
