// // //
import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";
import { useEffect, useState } from "react";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 4rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 9rem 1fr 9rem;
  }

  font-size: 1.4rem;
  padding: 0.8rem 0.4rem;
  border-bottom: 2px solid var(--color-grey-200);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

export default function TodayItem({ activity }) {
  const { id, status, Guests, numNights } = activity;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && (
        <Tag type="green" className="shadow shadow-gray-400">
          Arriving
        </Tag>
      )}
      {status === "checked-in" && (
        <Tag type="blue" className="shadow shadow-gray-400">
          Departing
        </Tag>
      )}

      {!isMobile && (
        <>
          <Flag src={Guests.countryFlag} alt={`Flag of ${Guests.country}`} />
        </>
      )}

      <Guest>{Guests.fullName}</Guest>
      {!isMobile && (
        <>
          <div>{numNights} nights</div>
        </>
      )}

      {status === "unconfirmed" && (
        <Link to={`/checkin/${id}`}>
          <Button sizes="small" variations="primary">
            Check in
          </Button>
        </Link>
      )}

      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}
