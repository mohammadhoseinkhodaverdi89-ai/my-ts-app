import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectProps  {
    children : ReactNode
}

function Protect({ children } : ProtectProps) {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default Protect;