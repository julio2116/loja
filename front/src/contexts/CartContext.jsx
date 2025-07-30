import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartQTD, setCartQTD] = useState(0);

  function handleCart() {
    setCartQTD((prev) => prev + 1);
  }

  return (
    <>
      <CartContext.Provider value={{cartQTD, handleCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

const useCart = () => {
    const context = useContext(CartContext)
    return context
}

export { CartProvider, useCart }
