import { BrowserRouter, Routes, Route } from "react-router-dom"
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
                </Routes>
            </BrowserRouter>

        </>
    )
}

