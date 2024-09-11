import Container from "@/components/Container";
import ProdList from "@/components/ProdList";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Produto() {
  return (
    <Container>
      <div>
        <h1 className="text-3xl font-bold ">Produtos</h1>
      </div>
      <div className="flex justify-end ">
        <button className="bg-yellow-500 flex items-center gap-3 px-3 py-2 hover:bg-yellow-400">
        <FaPlusCircle size={18} />
        <Link to="/AddProduto" className="bg-transparent flex items-center justify-center h-10  ">Adicionar Produtos</Link>
        </button>
        </div>
    <p className="font-bold text-xl text-yellow-400">Lista de Produtos</p>
    <ProdList/>
    </Container>
  )
}
