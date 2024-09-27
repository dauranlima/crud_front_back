import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import MainPage from "./pages/MainPage"
import Login from "./pages/Login"
import Vendedor from "./pages/Vendedor"
import Entregas from "./pages/Entregas"
import Produto from "./pages/Produto"
import AddProd from "./components/AddProd"
import EditProd from "./components/EditProd"
import EditVen from "./components/EditVen"
import AddVen from "./components/addVen"
import ListEntregas from "./components/ListEntregas"
import AddEntrega from "./components/AddEntrega"
import Scanner from "./components/Scanner"

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
      <Route path="/vendedores" element={<Vendedor />} />
      <Route path="/produtos" element={<Produto />} />
      <Route path="/entregas" element={<Entregas />} />
      <Route path="/addproduto" element={<AddProd />} />
      <Route path="/addvendedor" element={<AddVen />} />
      <Route path="/addentrega" element={<AddEntrega />} />
      <Route path="/scanner" element={<Scanner />} />
      <Route path="/:id/editar" element={<EditProd />} />
      <Route path="/listaentregas" element={<ListEntregas />} />
      <Route path="/:id/editarven" element={<EditVen />} />
      </Route>
    </Routes>

    </BrowserRouter>
  )
}
