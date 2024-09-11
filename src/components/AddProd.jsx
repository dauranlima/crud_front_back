import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FetchData from "../axios/config";


const AddProd = () => {

  const navigate = useNavigate();
  
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [imagem, setImagem] = useState("");
  
  const createProduct = async (e) => {
    e.preventDefault();
    await FetchData.post("/produtos", {
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
    <div>
      <h1 className="font-bold mb-4">CADASTRO DE PRODUTO</h1>
      <form onSubmit={(e) => createProduct(e)} className="flex flex-col gap-3 ">
        <label>Nome:</label>
        <input
          type="text"
          autoCapitalize="on"
          placeholder="Digite o Nome:"
          className="border uppercase border-slate-500 p-2 rounded-lg text-black"
          onChange={(e) => setNome(e.target.value)}
        />
        <label>Código:</label>
        <input
          type="text"
          maxLength={5}
          placeholder="Digite o Código:"
          className="border uppercase border-slate-500 p-2 rounded-lg text-black"
          onChange={(e) => setCodigo(e.target.value)}
        />

        <label>Descrição:</label>
        <textarea
          maxLength={800}
          placeholder="Digite a Descrição do produto"
          className="resize-y uppercase rounded-md border p-2 border-black text-black"
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
        <label>Categoria:</label>
        <input
          type="text"
          maxLength={50}
          placeholder="Digite a Categoria:"
          className="border uppercase  border-slate-500 p-2  rounded-lg text-black"
          onChange={(e) => setCategoria(e.target.value)}
        />
        <label>Quantidade:</label>
        <input
          type="text"
          maxLength={50}
          placeholder="Digite a Quantidade:"
          className="border uppercase  border-slate-500 p-2  rounded-lg text-black"
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <label>Preço:</label>
        <input
          type="number"
          placeholder="Digite o Preço:"
          className="border uppercase border-slate-500 p-2 rounded-lg text-black bg-roxo-claro"
          onChange={(e) => setPreco(e.target.value)}
        />
        <label>Tamanho:</label>
        <input
          type="text"
          maxLength={3}
          placeholder="Digite o Tamanho:"
          className="border uppercase border-slate-500 p-2 rounded-lg text-black"
          onChange={(e) => setTamanho(e.target.value)}
        />
        <label>Imagem:</label>
        <input
          type="text"
          className="border border-slate-500 p-2 rounded-lg text-black"
          onChange={(e) => setImagem(e.target.value)}
        />
        <button
          type="submit"
          className="font-bold bg-green-500 w-fit py-3 px-6 rounded-lg text-black "
        >
          adicionar
        </button>
      </form>
    </div>
  );
};

export default AddProd;
