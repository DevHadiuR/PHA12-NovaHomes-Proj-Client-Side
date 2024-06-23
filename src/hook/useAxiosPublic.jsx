import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://nova-homes-server-site.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
