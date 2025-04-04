// // //
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../api/apiAuth";

export function useUser() {
  const { isLoading, data: currentUser } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    currentUser,
    isAuthenticated: currentUser?.role === "authenticated",
  };
}
