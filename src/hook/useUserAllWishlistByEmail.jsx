import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserAllWishlistByEmail = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: allUserWishlistByEmail = [], refetch } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["allUserWishlistByEmail", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allWishlist/${user?.email}`);
      return res.data;
    },
  });

  return { allUserWishlistByEmail, refetch };
};

export default useUserAllWishlistByEmail;
