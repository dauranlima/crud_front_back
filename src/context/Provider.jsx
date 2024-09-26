import { useState } from "react";
import CartContext from "./cartContext";


export default function Provider({ children }) {

  const [prod, setProd] = useState([]);
  const [cartItems, setCartItems] = useState([]);

    const value = {
    prod,
    setProd,
    cartItems,
    setCartItems,
  }
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
