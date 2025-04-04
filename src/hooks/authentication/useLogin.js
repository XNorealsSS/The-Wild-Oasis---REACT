// // //
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (userData) => {
      // console.log(userData);
      // note for setQueriesData (it basically allows us to manually set some data into the React Query cache)
      queryClient.setQueryData(["currentUser"], userData.user);
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.error("ERROR", err);
      toast.error("Provided email or password are incorrect!");
    },
  });

  return { login, isPending };
}
