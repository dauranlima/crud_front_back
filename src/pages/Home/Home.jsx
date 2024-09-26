import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 text-5xl">
      <Link to={"/produtos"}>
      <button className="bg-yellow-500 py-10 w-[525px]">Produtos</button>

      </Link>
      <Link to={"/vendedores"} >
        <button className="bg-blue-500 py-10 w-[525px]">Vendedores</button>
      </Link>
      <Link to={"/entregas"}>
        <button className="bg-purple-500 py-10 w-[525px]">Entregas</button>
      </Link>
    </div>
  );
}