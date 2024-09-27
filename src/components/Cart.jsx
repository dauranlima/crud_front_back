import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../context/cartContext";

export default function Cart() {

  const { cartItems } = useContext(CartContext)

  const totalCartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const comPercentage = 10;
  const totalCommission = cartTotal * (comPercentage / 100);
  return (
    <>
    <section>
      <div className="h-[665px] overflow-auto p-2">
        <h4>Seu Carrinho: ({totalCartItemsCount})</h4>
        {!totalCartItemsCount ? 
        (
        <div className=" h-full flex flex-col items-center justify-center">
          <img src="/cesta.png" alt="cestaComprasImg" />
          <p className="font-bold font-roboto">Sua cesta está vazia!</p>
        </div>)
        :
        (cartItems.map((cartProd)=><CartItem key={cartProd.id} data={cartProd}/>))}
      </div>
      <div className="p-3 space-y-2 flex w-full bg-green-100 rounded-md border">
        <div className="flex flex-col w-1/2">
          <h2 className="font-bold">Resumo do Carrinho</h2>
          <h2 className="font-bold">Total Comissão: R$ {totalCommission.toFixed(2)}</h2>
        </div>
        <div>
          <h2 className="font-bold">Total: R${cartTotal.toFixed(2)}</h2>
        </div>
      </div>
    </section>
    </>
  )
}