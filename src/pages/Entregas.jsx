import { Link } from "react-router-dom";

export default function Entregas() {
  return (
    <>
    <div className="flex flex-col items-center gap-4 text-5xl">
    <Link to={"/addentrega"} >
      <button className="bg-indigo-800 text-white py-10 w-[525px]">Nova Entrega</button>
    </Link>
    <Link to={"/listaentregas"}>
      <button className="bg-purple-500 text-white py-10 w-[525px]">Lista de Entregas</button>
    </Link>
    </div>
    </>
  )
}
