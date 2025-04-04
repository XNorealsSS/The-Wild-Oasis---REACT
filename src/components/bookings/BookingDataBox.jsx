// // //
import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";
import { formatDistanceFromNow, formatCurrency } from "../../utility/helpers";

const StyledBookingDataBox = styled.section`
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`;


const Guest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-200);

  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);
  font-size: 1.3rem;

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1060px) {
    flex-direction: row !important;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.$isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.$isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }

  @media (max-width: 1100px) {
    flex-direction: column !important;
    padding: 1.6rem 2.2rem !important;
    align-items: center !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  text-align: right;
`;

export default function BookingDataBox({ booking }) {
  const {
    createdAt,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    Guests: { fullName: guestName, email, country, countryFlag, nationalID },
    Cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox className="shadow shadow-gray-400">
      <Header className="shadow shadow-gray-500">
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>

        <p className="max-[1060px]:text-2xl max-[500px]:text-xl w-max">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </Header>

      <Section>
        <div className="flex justify-center min-[1100px]:justify-normal">
          <Guest className="w-fit py-2! px-6! rounded-lg shadow shadow-gray-400 mb-24! ">
            <div className="flex items-center gap-4 bg-[var(--color-grey-200)] shadow shadow-gray-300 py-2! px-4! rounded-lg">
              {countryFlag && (
                <Flag src={countryFlag} alt={`Flag of ${country}`} />
              )}
              <p>
                {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
              </p>
            </div>
            <div className="flex gap-10 items-center! max-[425px]:text-lg w-max!">
              <div className="flex gap-2 items-center! min-[580px]:gap-4">
                <span>&bull;</span>
                <p>{email}</p>
              </div>
              <div className="flex gap-2 items-center! min-[580px]:gap-4">
                <span>&bull;</span>
                <p>National ID {nationalID}</p>
              </div>
            </div>
          </Guest>
        </div>

        {observations && (
          <div className="mb-8!">
            <DataItem
              icon={<HiOutlineChatBubbleBottomCenterText />}
              label="Observations"
              className="shadow shadow-gray-300 w-fit rounded-lg px-4! py-3! bg-[var(--color-grey-200)] max-[450px]:flex-col! max-[450px]:text-center max-[450px]:text-[1.4rem]"
            >
              {observations}
            </DataItem>
          </div>
        )}

        <DataItem
          icon={<HiOutlineCheckCircle />}
          label="Breakfast included?"
          className="shadow shadow-gray-300 w-fit rounded-lg px-4! py-3! bg-[var(--color-grey-200)]"
        >
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <Price $isPaid={isPaid} className="shadow shadow-gray-400 mt-16!">
          <DataItem
            icon={<HiOutlineCurrencyDollar />}
            label={`Total price`}
            className="flex-col min-[900px]:flex-row!"
          >
            <div className="text-center">
              <span className="font-semibold border-b">
                {formatCurrency(totalPrice)}
              </span>

              {hasBreakfast &&
                ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                  extrasPrice
                )} breakfast)`}
            </div>
          </DataItem>

          <p className="font-bold! mt-8! min-[900px]:mt-0! shadow shadow-gray-300 rounded-lg px-4! py-2! max-[1100px]:self-end!">
            {isPaid ? "Paid" : "Will pay at property"}
          </p>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(createdAt), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}
