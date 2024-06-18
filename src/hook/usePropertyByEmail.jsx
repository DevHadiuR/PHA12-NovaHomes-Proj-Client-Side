import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePropertyByEmail = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: allPropertiesByEmail = [], refetch } = useQuery({
    queryKey: ["allPropertiesByEmail"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allProperties/${user?.email}`);
      return res.data;
    },
  });

  return { allPropertiesByEmail, refetch };
};

export default usePropertyByEmail;
