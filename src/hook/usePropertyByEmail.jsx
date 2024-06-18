import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePropertyByEmail = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: allPropertiesByEmail = [], refetch } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["allPropertiesByEmail", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allProperties/${user?.email}`);
      return res.data;
    },
  });

  return { allPropertiesByEmail, refetch };
};

export default usePropertyByEmail;
