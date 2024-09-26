import { Link } from "react-router-dom";

export default function CardVen({sellers, handleDelete,busca}) {


  return (
      sellers.filter((seller) =>{ return busca.toLocaleLowerCase() === '' ? seller : seller.name.toLocaleLowerCase().includes(busca)|| 
      seller.id.toLocaleLowerCase().includes(busca)}).map((seller)=>(
      <div key={seller.id} className="flex flex-col border p-3 h-[460px] mt-5
      [box-shadow:5px_5px_5px_hsla(0,0%,0%,_0.1)] rounded-lg">
        <div className="flex items-center justify-center">
          <img className="border rounded-full shadow-lg w-40" src={seller.foto} alt="vendedor.image" />
        </div>
        <div className="flex flex-col items-start mt-10">
          <p className="text-gray-700">ID:{seller.id}</p>
          <h2 className="font-semibold">Nome: {seller.name}</h2>
          <p className="text-gray-700">Telefone: {seller.phone}</p>
          <p className="text-gray-700">E-mail: {seller.email}</p>
          <p className="text-gray-700">Cidade: {seller.cidade}</p>
  
        </div>
        <div>
          <Link to={`/${seller.id}/editarven`}>
            <button className="w-full bg-blue-500 shadow-lg rounded-lg p-3 font-bold text-white hover:bg-blue-700 duration-300 mt-2">Editar</button>
          </Link>
        </div>
        <div>
          <button  onClick={()=> handleDelete(seller.id)} className="w-full bg-red-500 shadow-lg rounded-lg p-3 font-bold text-white hover:bg-red-700 duration-300 mt-2">Deletar</button>
        </div>
      </div>
      ))
  )
}
