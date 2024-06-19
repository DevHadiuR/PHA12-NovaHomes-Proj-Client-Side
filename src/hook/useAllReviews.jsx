import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllReviews = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allReviews = [], refetch } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allReviews");
      return res.data;
    },
  });

  return { allReviews, refetch };
};

export default useAllReviews;
