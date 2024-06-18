import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllVerifiedProperties = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allAdminVerifiedProperites = [], refetch } = useQuery({
    queryKey: ["allAdminVerifiedProperites"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allAdminVerifiedProperites");
      return res.data;
    },
  });

  return { allAdminVerifiedProperites, refetch };
};

export default useAllVerifiedProperties;
