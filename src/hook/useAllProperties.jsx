import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const useAllProperties = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allProperties = [], refetch } = useQuery({
    queryKey: ["allProperties"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allProperties");
      return res.data;
    },
  });

  return { allProperties, refetch };
};

export default useAllProperties;
