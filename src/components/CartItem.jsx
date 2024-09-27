import { CircleMinus, CirclePlus } from "lucide-react";
import { useContext } from "react";
import { BsCartDashFill } from "react-icons/bs";
import CartContext from "../context/cartContext";

export default function CartItem({data}) {

  const {image,name,price,color,quantity} = data
  const {cartItems, setCartItems} = useContext(CartContext)


  const handleAddClick = () => {
    const existingItem = cartItems.find(item => item.id === data.id);
    if (existingItem) {
      // Item is already in the cart, increment quantity
      existingItem.quantity++;
      setCartItems([...cartItems]);
      if (existingItem.quantity <= 0) {
        // Remove item from cart if quantity reaches 0 or negative
        setCartItems(cartItems.filter(item => item.id !== data.id));
      }
    } else {
      // Item is not in the cart, add it with initial quantity
      if (data.quantity > 0) {
        setCartItems([...cartItems, { ...data, quantity: 1 }]);
      }
      console.log(existingItem)
    }
  };
  const handleDecrementClick = (id) => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      // Decrement quantity
      existingItem.quantity--;
      setCartItems([...cartItems]);
      if (existingItem.quantity <= 1) {
        // Remove item from cart if quantity reaches 0
        setCartItems(cartItems.filter(item => item.id !== id));
      }
      if(existingItem.quantity === 0){
        existingItem.quantity++;
      }
    }
    console.log(existingItem)
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
      <section className=" flex items-start p-1 border-b pb-2 mb-2 relative last:border-b-0">
        <img  src={image} alt="carItemImage" className="flex  items-center w-60 h-32 border-4" />
        <div id="content" className="text-sm text-gray-800 mx-3 ">
          <h3 className="flex flex-nowrap font-bold text-lg pr-3">{name} </h3>
          <h3 className="font-bold text-2xl mb-3">R$ {price},00</h3>
          <h3 className="text-sm">Cor: {color}</h3>
          <h3 className="text-sm mt-3">Quantidade:{quantity}</h3>
          <div className="flex items-center justify-start mt-3 gap-3">
          <button onClick={handleAddClick}>
            <CirclePlus/>mais
          </button>
          <button onClick={() => handleDecrementClick(data.id)}>
            <CircleMinus/>menos
          </button>
          </div>
          <button onClick={()=> removeItem(data.id)} className="">
            <BsCartDashFill className="absolute top-0 right-0 mr-3 text-red-500" size={30}/>
          </button>
        </div>
      </section>
    
    </>
  )
}

