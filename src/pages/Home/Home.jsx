import BigButton from "@/components/BigButton";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 text-5xl">
      <Link to={"/produtos"}>
        <BigButton>Produtos</BigButton>
      </Link>
      <Link to={"/vendedores"} >
        <BigButton className="bg-green-500 w-[525px]">Vendedores</BigButton>
      </Link>
      <Link to={"/entregas"}>
        <BigButton className="bg-purple-800 w-[525px]">Entregas</BigButton>
      </Link>
    </div>
  );
}
