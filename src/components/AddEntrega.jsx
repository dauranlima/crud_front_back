import { Edit } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import CartContext from "../context/cartContext";
import FetchData from "@/axios/config";
import ProductListEntrega from "./ProductListEntrega";

export default function AddEntrega() {

  const {prod,setProd} = useContext(CartContext)
  const [busca, setBusca] = useState("");

  const getProds = async () => {
    const res = await FetchData.get(`/products`)
    const data = await res.data
    setProd(data)
  }

  useEffect(() => {
    getProds();
  }, []);


return (
<>
<div className="border rounded-lg shadow-2xl h-[740px] w-full flex lg:flex-row sm:flex-col  ">
<div className="flex flex-col min-w-[680px]">
<div className="min-h-60 flex">
<div>
  <div className="p-2 w-96 flex flex-col gap-2">
    <p className="font-thin font-sans">Código da Entrega: 37</p>
    <p className="text-xl font-semibold">Data: 27/09/2024 </p>

    <select className="border-2 border-black rounded-md w-52 -ml-1">
    </select>
  </div>
  <div className="flex items-center ml-1 gap-3">
    <img
      className="border-4 rounded-lg border-purple-600 mt-2 w-20 h-20"
      src="https://i.pravatar.cc/150?img=23"
      alt="vendedoraIMG"
    />
    <div className="mt-4 flex flex-col">
      <p>Vendedora:</p>
      <div className="flex gap-2">
        <p>Comissão: 10%</p>
        <Link to={`/editarven`}>
          <Edit />
        </Link>
      </div>
    </div>
  </div>
</div>
<div className="w-full">
  <div className="flex flex-col justify-center items-center gap-2">
    <img
      className="w-40 h-40 border-4 border-black rounded-md mt-2"
      src="/qrcode.png"
      alt=""
    />
    <Link to={'/scanner'}>
    <button className="p-3 bg-purple-500 rounded-md shadow-lg hover:bg-purple-900 duration-300 text-white font-bold">
      Add Produto QRcode
    </button>
    </Link>
  </div>
</div>
</div>
<div className="flex flex-col h-full w-full p-1">
<div className="flex justify-between">
  <input
    className="w-full border-2 mb-2 p-2 text-black "
    type="text"
    placeholder="Pesquise o produto..."
    value={busca}
    onChange={(e) => setBusca(e.target.value)}
  />
</div>
<div>
  <div className="max-h-[440px] overflow-auto">
    <div className="bg-gray-50 text-gray-700 font-bold text-xs flex gap-[140px] px-6  z-1000  w-[630px] fixed">
      <h4>PRODUCT NAME</h4>
      <h4>COLOR</h4>
      <h4>PRICE</h4>
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            
          </th>
          <th scope="col" className="px-6 py-3">
            
          </th>
          <th scope="col" className="px-6 py-3">
            
          </th>
          <th scope="col" className="px-6 py-3">
            
          </th>
        </tr>
      </thead>
      <tbody >
        {prod.filter((proditem) => {return busca.toLocaleLowerCase() 
        === ""? proditem: proditem.name.toLocaleLowerCase().includes(busca) 
        ||proditem.id.toLocaleLowerCase().includes(busca);}).map((proditem) => (<ProductListEntrega key={proditem.id} data={proditem}/>))}
      </tbody>
    </table>
  </div>
</div>
</div>
</div>
<div className="min-w-[600px] border-l rounded-md">
  <Cart />
</div>
</div>
</>
  );
}