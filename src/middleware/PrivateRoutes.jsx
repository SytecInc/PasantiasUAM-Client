import { Navigate, Outlet } from "react-router-dom";
import { verifyToken } from "../services/jwt";

export const PrivateRoutes = () => {
    var flag = false;
    const token = localStorage.getItem('token');
    if (token) {
        if (verifyToken(token) !== null) {
            flag = true;
        }
    }
    return (
        flag ? <Outlet /> : <Navigate to="/signin" />
    );
}
