import { useEffect, useState } from "react";
import CartContext from "./cartContext";
import FetchData from "@/axios/config";



export default function Provider({ children }) {

  const [prod, setProd] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [seller, setSeller] = useState([]);

  const getSeller = async () => {
    const res = await FetchData.get('/sellers')
    const data = await res.data
    setSeller(data)
  }

  useEffect(() => {
    getSeller()    
  }, []);


    const value = {
    prod,
    setProd,
    cartItems,
    setCartItems,
    seller,
    setSeller,
    getSeller,
  }
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
