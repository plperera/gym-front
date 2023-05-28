import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { UserProvider } from "./context/UserContext"
import CartPage from "./pages/carrinho/CartPage"
import Footer from "./pages/footer/Footer"
import HomePage from "./pages/home/HomePage"
import Menu from "./pages/menu/Menu"
import ProductPage from "./pages/produto/ProductPage"
import AllProducts from "./pages/allProducts/ProductsPage"
import { ToastContainer } from "react-toastify"
import Login from "./pages/auth/Auth"
import AuthContext, { AuthProvider } from "./context/AuthContext"
import { useContext } from "react"
import Dashboard from "./pages/dashboard/Dashboard"
import useToken from "./hooks/useToken"
import ProductEdit from "./components/dashboard/ManageProduct/edit/ProductEdit"
import NotFound from "./pages/notFound/NotFound"
import CategoryForms from "./components/dashboard/ManageCategory/edit/CategoryForms"

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
                <AuthProvider>
                    <BrowserRouter>
                        <Menu/>
                        <Routes>
                            
                            <Route path="/" element={<HomePage/>} />
                            <Route path="/product/:productName" element={<ProductPage/>} />
                            <Route path="/products" element={<AllProducts/>} />
                            <Route path="/cart" element={<CartPage/>} />
                            <Route path="/auth/login" element={<Login/>} />
                            <Route path="/admin/dashboard" element={<ProtectedRouteGuard><Dashboard/></ProtectedRouteGuard>} />
                            <Route path="/admin/dashboard/product/:productId" element={<ProtectedRouteGuard><ProductEdit/></ProtectedRouteGuard>} />
                            <Route path="/admin/dashboard/category/:categoryId" element={<ProtectedRouteGuard><CategoryForms/></ProtectedRouteGuard>} />
                            <Route path="/admin/dashboard/products" element={<ProtectedRouteGuard><AllProducts/></ProtectedRouteGuard>} />
                            <Route path="*" element={<NotFound />} />
                            
                        </Routes>
                        <Footer/>
                    </BrowserRouter>
                </AuthProvider>
            </UserProvider>
        </>
    )
}

function ProtectedRouteGuard({ children }) {
    const token = useToken();

    if (!token) {
       return <Navigate to="/admin/login" />;
    }
  
    return <>{children}</>;
}