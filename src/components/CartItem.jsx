import { CircleMinus, CirclePlus } from "lucide-react";
import { BsCartDashFill } from "react-icons/bs";

export default function CartItem({data}) {

  const {image,name,price,color,quantity} = data

  return (
    <>
      <section className=" flex items-start p-1 border-b pb-2 mb-2 relative">
        <img  src={image} alt="carItemImage" className="w-48 h-48 border-4" />
        <div id="content" className="text-sm text-gray-800 mx-3 ">
          <h3 className="flex flex-nowrap font-bold text-lg pr-3">{name} </h3>
          <h3 className="font-bold text-2xl mb-3">R$ {price}</h3>
          <h3 className="text-sm">Cor: {color}</h3>
          <h3 className="text-sm mt-3">Quantidade:{quantity}</h3>
          <div className="flex items-center justify-start mt-3 gap-3">
          <button>
            <CirclePlus/>
          </button>
          <span>10</span>
          <button>
            <CircleMinus/>
          </button>
          </div>
          <button className="">
            <BsCartDashFill className="absolute top-0 right-0 mr-3 text-red-500" size={30}/>
          </button>
        </div>
      </section>
    
    </>
  )
}

