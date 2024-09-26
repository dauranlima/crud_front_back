import { Edit } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import CartContext from "../context/cartContext";
import FetchData from "@/axios/config";

export default function AddEntrega() {

  const {prod,setProd, cartItems, setCardItems} = useContext(CartContext)
  const [busca, setBusca] = useState("");

  const getProds = async () => {
    const res = await FetchData.get(`/products`)
    const data = await res.data
    setProd(data)
  }

  useEffect(() => {
    getProds();
  }, []);


  console.log([prod])

  const handleAddCart = () => {
    setCardItems([...cartItems, prod])
  }

  console.log(cartItems)

  return (
<>
<div className="border rounded-lg border-gray-600 h-[740px] w-full flex lg:flex-row sm:flex-col  ">
<div className="flex flex-col min-w-[680px]">
<div className="min-h-60 flex">
<div>
  <div className="p-2 w-96 flex flex-col gap-2">
    <p className="font-thin font-sans">Código da Entrega: 37</p>
    <p className="text-xl font-semibold">Data: 25/09/2024 </p>
    <select
      className="border-2 border-black rounded-md w-52 -ml-1"
      id="select"
    >
      <optgroup>
        <option value="Maria">Selecione a Vendedora</option>
        <option value="Maria">Maria Neuzely</option>
        <option value="Maria">Samara Boch</option>
        <option value="Maria">Claudia Lima</option>
        <option value="Maria">
          Joana Santana dos Santos Neves
        </option>
      </optgroup>
    </select>
  </div>
  <div className="flex items-center ml-1 gap-3">
    <img
      className="border-4 rounded-lg border-purple-600 mt-2 w-20 h-20"
      src="https://i.pravatar.cc/150?img=23"
      alt="vendedoraIMG"
    />
    <div className="mt-4 flex flex-col">
      <p>Vendedora: Maria Neuzely</p>
      <div className="flex gap-2">
        <p>Comissão: 45%</p>
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
    <button className="p-3 bg-purple-500 rounded-md shadow-lg hover:bg-purple-900 duration-300 text-white font-bold">
      Add Produto QRcode
    </button>
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
    <div className="bg-gray-50 text-gray-700 font-bold text-xs flex gap-[140px] px-6 p-2 z-1000  w-[630px] fixed">
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
        ||proditem.id.toLocaleLowerCase().includes(busca);}).map((proditem) => (
              <tr key={proditem.id} className="border-b border-gray-200 dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  {proditem.name}
                </th>
                <td className="px-6 py-4">
                  {proditem.color}
                </td>
                <td className="px-6 py-4">
                  ${proditem.price}
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  <button onClick={handleAddCart} className="p-2 bg-green-400 rounded-lg shadow-xl hover:bg-green-700 duration-300 text-white font-bold">Adicionar</button>
                </td>
              </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>
</div>
</div>
<div className="border border-green-500 min-w-[600px]">
  <Cart />
</div>
</div>
</>
  );
}