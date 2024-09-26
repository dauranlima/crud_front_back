import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FetchData from "@/axios/config";
import { useRef } from "react";

export default function AddProd() {

  const navigate = useNavigate()

  const inputRef = useRef()

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(0);



  const createProd = async (e) => {
      e.preventDefault()
      try {
        await FetchData.post('/products', {
          name,
          price,
          color,
          image,
          quantity,
        })
        navigate('/produtos')
        
      } catch (error) {
        console.log(error)
      }
    }
    
    useEffect(() => {
      inputRef.current.focus()
    }, []);
    
    return (
      <>
        <div className="border flex justify-center">
          <form className="flex flex-col p-4 border w-96 justify-center gap-3" onSubmit={createProd}>
            <div>
              <h1 className="text-center font-bold text-3xl">Cadastro de Produto</h1>
            </div>
            <input ref={inputRef} required className="p-3 border rounded-md" type="text" placeholder="Digite o Nome..." onChange={(e) => setName(e.target.value)}/>
            <input required className="p-3 border rounded-md" type="text" placeholder="Digite o Preço..." onChange={(e) => setPrice(e.target.value)}/>
            <input required className="p-3 border rounded-md" type="text" placeholder="Digite a Cor..." onChange={(e) => setColor(e.target.value)}/>
            <input  className="p-3 border rounded-md" type="text" placeholder="Digite URL da imagem..." onChange={(e) => setImage(e.target.value)}/>
            <input  className="p-3 border rounded-md" type="number" placeholder="Digite a Quantidade..." onChange={(e) => setQuantity(e.target.value)}/>
            <button className="p-3 bg-yellow-400 rounded-md shadow-md hover:bg-yellow-600 duration-300 hover:font-bold" type="submit">Gravar</button>
          </form>
        </div>
      </>
  )
}
