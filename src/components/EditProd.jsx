import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FetchData from "../axios/config";


const EditProd = () => {
  
  const navigate = useNavigate();
  
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [imagem, setImagem] = useState("");

  const { id } = useParams();

  const getProds = async () => {
    try {
      const response = await FetchData.get(`/produtos/${id}`);
      const data = response.data;
      setNome(data.nome);
      setCodigo(data.codigo);
      setDescricao(data.descricao);
      setCategoria(data.categoria);
      setQuantidade(data.quantidade);
      setPreco(data.preco);
      setTamanho(data.tamanho);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProds();
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();
    await FetchData.put(`/produtos/${id}`, {
      nome: nome,
      codigo: codigo,
      descricao: descricao,
      categoria: categoria,
      quantidade: quantidade,
      preco: preco,
      tamanho: tamanho,
      imagem: imagem,
    });
    navigate("/produtos");
  };

  return (
    <>
      <h1 className="font-bold mb-4">EDITAR PRODUTO</h1>
      <form onSubmit={getProds} className="flex flex-col gap-3 ">
        <label>Nome:</label>
        <input
          type="text"
          autoCapitalize="on"
          maxLength={100}
          placeholder="Digite o Nome:"
          className="border uppercase border-slate-500 p-2 rounded-lg text-black"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label>Código:</label>
        <input
          type="text"
          maxLength={5}
          placeholder="Digite o Código:"
          className="border uppercase border-slate-500 p-2 rounded-lg text-black"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <label>Descrição:</label>
        <textarea
          maxLength={800}
          className="resize-y uppercase rounded-md border p-2 border-black text-black"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
        <label>Categoria:</label>
        <input
          type="text"
          maxLength={50}
          placeholder="Digite a Categoria:"
          className="border uppercase  border-slate-500 p-2  rounded-lg text-black"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <label>Quantidade:</label>
        <input
          type="text"
          maxLength={50}
          placeholder="Digite a Quantidade:"
          className="border uppercase  border-slate-500 p-2  rounded-lg text-black"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <label>Preço:</label>
        <input
          type="number"
          placeholder="Digite o Preço:"
          className="border uppercase border-slate-500 p-2 rounded-lg text-black"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <label>Tamanho:</label>
        <input
          type="text"
          maxLength={3}
          placeholder="Digite o Tamanho:"
          className="border uppercase border-slate-500 p-2 rounded-lg text-black"
          value={tamanho}
          onChange={(e) => setTamanho(e.target.value)}
        />
        <label>Imagem:</label>
        <input
          type="file"
          className="border border-slate-500 p-2 rounded-lg text-black"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />
        <button
          type="submit"
          onClick={updateProduct}
          className="font-bold bg-green-500 w-fit py-3 px-6 rounded-lg text-black "
        >
          Editar Produto
        </button>
      </form>
    </>
  );
};

export default EditProd;
