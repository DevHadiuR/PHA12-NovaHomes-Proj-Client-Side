import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://nova-homes-server-site.vercel.app",
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  //  request interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "access-token"
      )}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //response interceptor
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logoutUser();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
