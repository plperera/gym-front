import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartPage from "./pages/carrinho/CartPage"
import Footer from "./pages/footer/Footer"
import HomePage from "./pages/home/HomePage"
import Menu from "./pages/menu/Menu"
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
                <Footer/>
            </BrowserRouter>

        </>
    )
}

