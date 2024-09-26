import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../context/cartContext";

export default function Cart() {

  const { cartItems } = useContext(CartContext)
  console.log(cartItems)
  return (
    <>
    <section className="h-[735px] overflow-auto border-red-400 bg-blue-300 border-4">
      <div>
        {cartItems.map((cartProd)=><CartItem key={cartProd.id} data={cartProd}/>)}
      </div>
    </section>
    </>
  )
}