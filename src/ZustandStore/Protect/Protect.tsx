import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface ProtectRoute {
    children : ReactNode;
}
function Protect({ children } : ProtectRoute) {
    const islogin = localStorage.getItem("isLogin");

        if (!islogin) {
        return <Navigate to="/login" />;
    }

    return children;
}
export default Protect