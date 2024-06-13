import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllProperties = () => {
  const { data: allProperties = [] } = useQuery({
    queryKey: ["allProperties"],
    queryFn: async () => {
      const res = await axios.get("/properties.json");
      return res.data;
    },
  });

  return { allProperties };
};

export default useAllProperties;
