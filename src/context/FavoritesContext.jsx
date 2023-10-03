import { useState, createContext } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => {},
});

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    let updatedFavorites = favorites.map((favorite) => {
      if (favorite === productId) {
        return null;
      }
      return favorite;
    });

    updatedFavorites = updatedFavorites.filter((f) => f === null);

    setFavorites(updatedFavorites);
  };

  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  return (
    <FavoritesContext.Provider>
      value=
      {{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
      {children}
    </FavoritesContext.Provider>
  );
}
