import { AiOutlineCloseCircle } from "react-icons/ai";

export default function CartItem({cartItem }) {
  return (
    <>
    <div className="border border-yellow-300 flex">
    <div>
      <p>{cartItem.name}</p>
      <div>
        <div>Quantidade:{cartItem.quantity}</div>
        <div>Valor do produto R${cartItem.price}</div>
        <div>Total R${(cartItem.price * cartItem.quantity).toFixed(2)}</div>
      </div>
    </div>
    <div>
    <AiOutlineCloseCircle size={20}/>
    </div>
    </div>
    
    </>
  )
}

