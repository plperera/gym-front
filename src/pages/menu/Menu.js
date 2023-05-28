import { useLocation } from "react-router-dom";
import UserMenu from "../../components/menu/UserMenu";
import AdminMenu from "../../components/menu/AdminMenu";

export default function Menu (){
    const location = useLocation();
    const isAdminRoute = location.pathname.includes("/admin");

    return isAdminRoute ? <AdminMenu /> : <UserMenu />;
}