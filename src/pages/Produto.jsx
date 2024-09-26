import ListProd from "@/components/ListProd";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";


export default function Produto() {

  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.focus();
  
  }, []);
  return (
    <>
    <div className="flex justify-between">
      <h1 className="font-bold text-5xl text-yellow-500">Lista de Produtos</h1>
      <Link ref={btnRef} to={'/addproduto'} className="p-3 bg-yellow-500 rounded-md mt-2 font-bold">Add Product</Link>
    </div>
    <div className="border h-[700px]">
      <ListProd/>
    </div>
    </>
  )
}
