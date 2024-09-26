import FetchData from "@/axios/config"
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"


export default function EditProd() {

  const navigate = useNavigate();
  const inputRef = useRef();
  const {id} = useParams();

  // state dos campos do input 
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('')
  const [image, setImage] = useState('')
  const [quantity, setQuantity] = useState(0)


  const getProds = async () => {
    const res = await FetchData.get(`/products/${id}`)
    const data = await res.data
    setName(data.name)
    setPrice(data.price)
    setColor(data.color)
    setImage(data.image)
    setQuantity(data.quantity)
  }

  useEffect(() => {
    getProds()    
  }, []);
  
  const updateProduct = async (e) => {
      e.preventDefault()
        await FetchData.put(`/products/${id}`,{
          name,
          price,
          color,
          image,
          quantity,
        })

        navigate('/produtos')
      }
  
  
  return (
    <div className="border flex justify-center">
          <form className="flex flex-col p-4 border w-96 justify-center gap-3" onSubmit={updateProduct}>
            <div>
              <h1 className="text-center font-bold text-3xl">Editar de Produto</h1>
            </div>
            <input value={name} ref={inputRef} required className="p-3 border rounded-md" type="text" placeholder="Digite o Nome..." onChange={(e) => setName(e.target.value)}/>
            <input value={price} required className="p-3 border rounded-md" type="text" placeholder="Digite o Preço..." onChange={(e) => setPrice(e.target.value)}/>
            <input value={color} required className="p-3 border rounded-md" type="text" placeholder="Digite a Cor..." onChange={(e) => setColor(e.target.value)}/>
            <input value={image} required className="p-3 border rounded-md" type="text" placeholder="Digite a  URL da imagem..." onChange={(e) => setImage(e.target.value)}/>
            <input value={quantity} required className="p-3 border rounded-md" type="number" placeholder="Digite a  Quantidade..." onChange={(e) => setQuantity(e.target.value)}/>
            <button className="p-3 bg-orange-400 rounded-md shadow-md hover:bg-orange-600 duration-300 hover:font-bold " onClick={updateProduct} type="submit">Editar</button>
          </form>

    </div>
  )
}
