import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllOfferedPropertiesByEmail = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loader } = useAuth();

  const { data: allOfferedPropertiesByEmail = [], refetch , isLoading } = useQuery({
    enabled: !loader && !!user?.email,
    queryKey: ["allOfferedPropertiesByEmail", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allOfferedProperties/${user?.email}`);
      return res.data;
    },
  });

  

  return { allOfferedPropertiesByEmail, refetch , isLoading};
};

export default useAllOfferedPropertiesByEmail;
