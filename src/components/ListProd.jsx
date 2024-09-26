import { Edit, FilterIcon, Search, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";
import FetchData from "@/axios/config";

export default function ListProd() {

  const [busca, setBusca] = useState("");
  const {prod, setProd} = useContext(CartContext)

  const getProds = async () => {
    const res = await FetchData.get(`/products`)
    const data = await res.data
    setProd(data)
  }
  useEffect(() => {
    getProds();
  }, []);


  const handleDelete = async (id) => {
      const confirmed = confirm('Deseja excluir este produto?')
      if(confirmed){
        await FetchData.delete(`http://localhost:3000/products/${id}`)
        .then(()=> {getProds()
        });
      }
  };

  return (
    <>
    <div className="flex justify-between">
    <div className="flex items-center">
      <label className="font-bold">Pesquisar Produto:</label>
      <input className="w-[420px] border p-2 text-black pr-10" type="text" placeholder="Pesquisar o produto..." />
      <Search className="-ml-8" />
    </div>
    <div className="flex items-center">
      <label className="font-bold">Filtrar Produto:</label>
      <FilterIcon/>
      <input className="w-[420px] border p-2 text-black" type="text" placeholder="Digite para Filtrar por ID ou NOME..." value={busca} onChange={(e) => setBusca(e.target.value)} />
    </div>
    </div>
    <div className="h-[600px] overflow-auto flex flex-col gap-3">
      {prod.filter((item) =>{ return busca.toLocaleLowerCase()
      === '' ? item : item.name.toLocaleLowerCase().includes(busca)
      || item.id.toLocaleLowerCase().includes(busca)}).map((item)=>(
        <>
        <div className="flex justify-between border p-10">
          <div className="flex flex-col items-start">
            <div>
              <h2 className="font-bold text-xl w-96">
                Produto: {item.name}
              </h2>
            </div>
            <div>
              Id: {item.id}
            </div>
            <div>
              Preço: R$ {item.price}
            </div>
            <div>
              Cor: R$ {item.color}
            </div>
          </div>
          <div className="">
            <img src={item.image} width={200} height={200} alt="imgPrd" />
          </div>
          <div className="flex flex-col items-start mr-10 mt-3 gap-20">
            <div>
              <Link onClick={()=>handleDelete(item.id)}>
                <Trash2 className="text-red-500"/>
              </Link>
            </div>
            <div>
              <Link to={`/${item.id}/editar`}>
                <Edit className="text-orange-400"/>
              </Link>
            </div>
          </div>
        </div>
        </>
        
      ))}
    </div>
    </>
  )
}
