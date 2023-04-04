import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartPage from "./components/cartPage/CartPage"
import Home from "./components/Home"
import Menu from "./components/Menu"
import ProductPage from "./components/productPage/ProductPage"

export default function App (){
 
    return(
        <>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/product" element={<ProductPage/>} />
                    <Route path="/cart" element={<CartPage/>} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

