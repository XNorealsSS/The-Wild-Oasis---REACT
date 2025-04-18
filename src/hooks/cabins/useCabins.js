// // //
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../api/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return {
    isLoading,
    cabins,
    error,
  };
}
