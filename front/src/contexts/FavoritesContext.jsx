import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favoritesQTD, setFavoritesQTD] = useState(0);

  function handleFavorites() {
    setFavoritesQTD((prev) => prev + 1);
  }

  return (
    <>
      <FavoritesContext.Provider value={{ favoritesQTD, handleFavorites }}>
        {children}
      </FavoritesContext.Provider>
    </>
  );
};

const useFavorites = () => {
    const context = useContext(FavoritesContext)
    return context
}

export { FavoritesProvider, useFavorites }