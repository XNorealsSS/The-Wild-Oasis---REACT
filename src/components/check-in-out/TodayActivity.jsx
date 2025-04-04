// // //
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { useTodayActivity } from "../../hooks/check-in-out/useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);

  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

export default function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <StyledToday className="shadow! shadow-gray-400!">
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>

      {!isLoading ? (
        activities?.length > 0 ? (
          <TodayList>
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No activity today!...</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}
