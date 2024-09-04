import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import MainPage from "./pages/MainPage"

export default function routes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>

    </BrowserRouter>
  )
}
