import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import CartPage from "./pages/carrinho/CartPage"
import HomePage from "./pages/home/HomePage"
import ProductPage from "./pages/produto/ProductPage"

export default function App (){
 
    return(
        <>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/product" element={<ProductPage/>} />
                    <Route path="/cart" element={<CartPage/>} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

