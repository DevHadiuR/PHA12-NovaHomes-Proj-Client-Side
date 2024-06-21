import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllOfferedPropertiesByEmailForAgent = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loader } = useAuth();

  const { data: allOfferedPropertiesByEmailForAgent = [], refetch } = useQuery({
    enabled: !loader && !!user?.email,
    queryKey: ["allOfferedPropertiesByEmailForAgent", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/allOfferedPropertiesForAgent/${user?.email}`
      );
      return res.data;
    },
  });

  return { allOfferedPropertiesByEmailForAgent, refetch };
};

export default useAllOfferedPropertiesByEmailForAgent;
