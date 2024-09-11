import { Link } from "react-router-dom"

const Header = () => {
  return (
    <main>
      <header className="bg-blue-950 flex justify-between py-9 px-8 items-center mb-10">
        <Link to="/" className="text-white font-bold text-2xl">SISTEMA DE VENDAS</Link>
        <Link to="/login" className="text-white font-bold">Sair</Link>

      </header>
    </main>
  )
}

export default Header