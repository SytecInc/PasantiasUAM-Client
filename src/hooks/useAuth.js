import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";

const useAuth = () => useContext(AuthContext);
export default useAuth;
