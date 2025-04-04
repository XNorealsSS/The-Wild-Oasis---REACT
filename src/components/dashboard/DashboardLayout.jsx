// // //
import styled from "styled-components";
import { useRecentBookings } from "../../hooks/dashboard/useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "../../hooks/dashboard/useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../../hooks/cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 32rem auto;
  gap: 2.4rem;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
`;

export default function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings();
  const { isLoading: isLoading2, confirmedStays, numDays } = useRecentStays();
  const { isLoading: isLoading3, cabins } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
  // console.log(bookings);
  // console.log(stays);
  // console.log(confirmedStays);

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />

      <TodayActivity />

      <DurationChart confirmedStays={confirmedStays} />

      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
