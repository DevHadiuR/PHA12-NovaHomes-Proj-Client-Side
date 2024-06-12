import { useContext } from "react";
import { ProjectContext } from "../provider/ReactProvider";

const useAuth = () => {
  const auth = useContext(ProjectContext);
  return auth;
};

export default useAuth;
