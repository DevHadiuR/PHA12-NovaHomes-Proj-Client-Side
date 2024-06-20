import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllOfferedProperties = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allOfferedProperties = [], refetch } = useQuery({
    queryKey: ["allOfferedProperties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allOfferedProperties");
      return res.data;
    },
  });

  return { allOfferedProperties, refetch };
};

export default useAllOfferedProperties;
