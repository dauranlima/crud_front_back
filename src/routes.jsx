import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import MainPage from "./pages/MainPage"
import Login from "./pages/Login"
import Produto from "./pages/Produto"
import Vendedor from "./pages/Vendedor"
import Entregas from "./pages/Entregas"
import EditProduct from "./pages/EditProduct"
import AddProduct from "./pages/Home/AddProduct"

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
      <Route path="/produtos" element={<Produto />} />
      <Route path="/vendedores" element={<Vendedor />} />
      <Route path="/entregas" element={<Entregas />} />
      <Route path="/editProduto/:id" element={<EditProduct />} />
      <Route path="/addProduto" element={<AddProduct />} />
      </Route>
    </Routes>

    </BrowserRouter>
  )
}
