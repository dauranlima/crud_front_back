import FetchData from "@/axios/config"
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"


export default function EditVen() {

  const navigate = useNavigate();
  const inputRef = useRef();
  const {id} = useParams();

  // state dos campos do input 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
  const [cidade, setCidade] = useState('')
  const [foto, setFoto] = useState('')


  const getSeller = async () => {
    const res = await FetchData.get(`/sellers/${id}`)
    const data = await res.data
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
    setCidade(data.cidade)
    setFoto(data.foto)
  }

  useEffect(() => {
    getSeller()    
  }, []);
  
  const updateSeller = async (e) => {
      e.preventDefault()
        await FetchData.put(`/sellers/${id}`,{
          name,
          email,
          phone,
          cidade,
          foto,
        })

        navigate('/vendedores')
      }
  


  return (
    <div className="border flex justify-center">
    <form className="flex flex-col p-4 border w-96 justify-center gap-3" onSubmit={getSeller}>
      <div>
        <h1 className="text-center font-bold text-3xl">Editar Vendedor</h1>
      </div>
      <input value={name} ref={inputRef} required className="p-3 border rounded-md" type="text" placeholder="Digite o Nome..." onChange={(e) => setName(e.target.value)}/>
      <input value={email} required className="p-3 border rounded-md" type="text" placeholder="Digite o Email..." onChange={(e) => setEmail(e.target.value)}/>
      <input value={phone} required className="p-3 border rounded-md" type="text" placeholder="Digite o Telefone..." onChange={(e) => setPhone(e.target.value)}/>
      <input value={cidade} required className="p-3 border rounded-md" type="text" placeholder="Digite a Cidade..." onChange={(e) => setCidade(e.target.value)}/>
      <input value={foto} required className="p-3 border rounded-md" type="text" placeholder="Adicione o Link da foto..." onChange={(e) => setFoto(e.target.value)}/>
      <button className="p-3 bg-orange-400 rounded-md shadow-md hover:bg-orange-600 duration-300 hover:font-bold " onClick={updateSeller} type="submit">Editar</button>
    </form>

</div>
  )
}
