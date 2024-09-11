import { HiPencilAlt } from "react-icons/hi";
import { useEffect, useState } from "react";
import FetchData from "../axios/config";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProdList = () => {

  const [prod, setProd] = useState([]);
  const [busca, setBusca] = useState("");

  const getProds = async () => {
    try {
      const response = await FetchData.get("/produtos");
      const data = response.data;
      setProd(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProds();
  }, []);

  const handleDelete = async (_id) => {
    const confirmed = confirm(" Tem certeza que deseja deletar esse produto");
    if (confirmed) {
      await FetchData.delete("/produtos/" + _id).then(({ data }) => {
        const newArray = prod.filter((item) => item._id !== prod._id);
        setProd(newArray);
        getProds();
      });
    }
  };

  return (
    <>
    <div className="flex flex-col">
        <div>
          <input
            className="border border-black w-full p-2 text-black"
            type="search"
            placeholder="Digite aqui para pesquisar"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        <div className=" max-h-[600px] overflow-auto ">
          {prod.length === 0 ? (
            <p>Carregando produtos....</p>
          ) :  (
            prod.filter((pdt) =>{ return busca.toLowerCase() === '' ? pdt  : pdt.nome.toLowerCase().includes(busca)})
            .map((pdt) => (
              <>

              <div key={pdt._id} className="py-4 px-4 border border-red-300 my-3 flex justify-between gap-5 items-start"
              >
              <div>
                  <h2 className="font-bold text-2xl ">{pdt.nome}</h2>
                  <div>
                    <span className="font-bold">Descrição:</span>{pdt.descricao}
                  </div>
                  <div>
                    <span className="font-bold">Código:</span>{pdt.codigo}
                  </div>
                  <div>
                    <span className="font-bold">Categoria:</span>{pdt.categoria}
                  </div>
                  <div>
                    <span className="font-bold"> Tamanho: </span> {pdt.tamanho}
                  </div>
                  <div>
                    <span className="font-bold"> Preço: </span> {pdt.preco}
                  </div>
                </div>
                <div className="flex gap-2 ">
                  <button onClick={() => handleDelete(pdt._id)} className="text-red-500">
                    <HiOutlineTrash size={24} />
                  </button>
                  <Link to={`/EditProduto/${pdt._id}`}>
                    <HiPencilAlt size={24} />
                  </Link>
                </div>
              </div>
              
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProdList;
