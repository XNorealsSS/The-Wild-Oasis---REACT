// // //
import styled from "styled-components";
import { useUser } from "../../hooks/authentication/useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);

  @media (max-width: 425px) {
    font-size: 1.3rem;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-200);
  /* box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.2); */
`;

export default function UserAvatar() {
  const { currentUser } = useUser();
  // console.log(currentUser);
  const { fullName, avatar } = currentUser.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />
      <span className="border-b-2 border-b-gray-300">{fullName}</span>
    </StyledUserAvatar>
  );
}
