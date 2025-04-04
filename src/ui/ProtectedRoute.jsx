// // //
import styled from "styled-components";
import { useUser } from "../hooks/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // ⏺ 1) Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // ⏺ 2) if there is no authenticated user, then redirect to the /login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) return navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // ⏺ 3) while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // ⏺ 4) if there is a authenticated user, then render the app
  if (isAuthenticated) return children;
}
