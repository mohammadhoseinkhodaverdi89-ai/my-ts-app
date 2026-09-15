import { Navigate } from "react-router-dom";
function Protect({ children }) {
    const 
    const islogin = localStorage.get("isLogin");
        if (!islogin) {
        return <Navigate to="/login" />;
    }
    return children;
}
export default Protect