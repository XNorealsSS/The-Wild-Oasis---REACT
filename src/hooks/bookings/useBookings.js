// // //
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../api/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utility/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // ⏺ FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "status",
          value: filterValue,
        };
  // {
  //   field: "totalPrice",
  //   value: 6000,
  //   method: "gte",
  // };
  // console.log(filter);

  // ⏺ SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = {
    field,
    direction,
  };

  // ⏺ PAGINATION
  const page = !searchParams.get("page") ? 1 : +searchParams.get("page");

  // ⏺ QUERY
  const {
    isLoading,
    data: { bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["Bookings", filter, sortBy, page], // ⏺ when the filter changes then react query will re-fetch the data
    queryFn: () =>
      getBookings({
        filter,
        sortBy,
        page,
      }),
  });

  // ⏺ PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      // ⏺ prefetchQuery is React Query method/function that loads data before it’s needed to make it faster to access later. check React Query devtools
      queryKey: ["Bookings", filter, sortBy, page + 1],
      queryFn: () =>
        getBookings({
          filter,
          sortBy,
          page: page + 1,
        }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["Bookings", filter, sortBy, page - 1],
      queryFn: () =>
        getBookings({
          filter,
          sortBy,
          page: page - 1,
        }),
    });
  }

  return {
    isLoading,
    bookings,
    error,
    count,
  };
}
