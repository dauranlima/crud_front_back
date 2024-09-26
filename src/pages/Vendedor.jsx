import FetchData from "@/axios/config";
import CardVen from "@/components/CardVen";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vendedor() {


  const [seller, setSeller] = useState([]);
  const [busca, setBusca] = useState("");

  const getSeller = async () => {
    const res = await FetchData.get('/sellers')
    const data = await res.data
    setSeller(data)
  }

  useEffect(() => {
    getSeller()    
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm('Deseja excluir este vendedor?')
    if(confirmed){
      await FetchData.delete(`http://localhost:3000/sellers/${id}`)
      .then(()=> {getSeller()
      });
    }
};

  return (
    <>
    <div className="flex justify-between">
    <div className="flex w-96">
      <input value={busca} onChange={(e)=> setBusca(e.target.value)} className="w-full border p-2 text-black border-gray-500 rounded-md" type="text" placeholder="Pesquisar o produto por ID ou NOME..."/>
    </div>
    <Link to={'/addvendedor'} className="p-3 bg-blue-500 text-white rounded-md mt-2 font-bold">Add Vendedor</Link>
    </div>
    <div>
      <h1 className="font-bold text-5xl text-blue-500">Lista de Vendedores</h1>
    </div>
    <div className="grid grid-cols-3 gap-3">
      <CardVen handleDelete={handleDelete} busca={busca} handle sellers={seller} />
    </div>
    </>
  )
}
