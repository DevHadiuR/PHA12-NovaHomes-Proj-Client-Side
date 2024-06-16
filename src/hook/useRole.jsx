import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userRole = [] } = useQuery({
    queryKey: [user?.email, "userRole"],
    queryFn: async () => {
      const res = await axiosSecure.get(`allUsers/userRole/${user.email}`);
      return res.data;
    },
  });

  return { userRole };
};

export default useRole;
