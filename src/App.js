import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./context/UserContext"
import CartPage from "./pages/carrinho/CartPage"
import Footer from "./pages/footer/Footer"
import HomePage from "./pages/home/HomePage"
import Menu from "./pages/menu/Menu"
import ProductPage from "./pages/produto/ProductPage"
import AllProducts from "./pages/allProducts/ProductsPage"
import { ToastContainer } from "react-toastify"

export default function App (){
 
    return(
        <>
            
            <ToastContainer 
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            
            <UserProvider>
                <BrowserRouter>
                    <Menu/>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/product/:productName" element={<ProductPage/>} />
                        <Route path="/products" element={<AllProducts/>} />
                        <Route path="/cart" element={<CartPage/>} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </UserProvider>
        </>
    )
}

