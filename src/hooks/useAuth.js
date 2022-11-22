import { useContext } from "react";
import { AuthContext } from "../contexts/useAuth";

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;