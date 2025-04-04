// // //
import { getToday } from "../utility/helpers";
import supabase from "../database/supabase";
import { PAGE_SIZE } from "../utility/constants";

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("Bookings")
    // .select("*,  Cabins(*), Guests(*)"); // ⏺ Bookings er all data er sathe foreign key er all data o asbe
    .select(
      "id, createdAt, startDate, endDate, numNights, numGuests, status, totalPrice, Cabins(name), Guests(fullName, email)",
      {
        count: "exact", // ⏺ ensures that it return the exact number of matching rows
      }
    );
  // .eq("status", "unconfirmed")
  // .gte("totalPrice", 6000); // ⏺ it's filter value greater than or equal to a specified value
  // .lte("totalPrice", 6000); // ⏺ it's filter value less than or equal to a specified value

  // ⏺ FILTER
  // console.log(filter);
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // ⏺ SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      // ⏺ it's sort the query results in ascending or descending order
      ascending: sortBy.direction === "asc",
    });

  // ⏺ PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to); // ⏺ it's used for pagination, specifying the start(from) and end(to) index of the query results
  }

  const { data: bookings, error, count } = await query;
  // console.log(count);

  if (error) {
    console.error(error);
    throw new Error("Bookings couldn't be loaded!");
  }

  // ⏺ server thekei data filter/sort hoye asbe, ar Cabin e kintu ami client theke filter/sort korchi

  return { bookings, count };
}

export async function getBooking(id) {
  const { data: booking, error } = await supabase
    .from("Bookings")
    .select("*, Cabins(*), Guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found!");
  }

  return booking;
}

// ⏺ Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example
export async function getBookingsAfterDate(date) {
  // date need to be ISOString
  const { data, error } = await supabase
    .from("Bookings")
    .select("createdAt, totalPrice, extrasPrice")
    .gte("createdAt", date)
    .lte("createdAt", getToday({ end: true }));
  // note

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded!");
  }

  return data;
}

// ⏺ Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("Bookings")
    .select("*, Guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded!");
  }

  return data;
}

// ⏺ Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  // note
  const { data, error } = await supabase
    .from("Bookings")
    .select("*, Guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("createdAt");

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded!");
  }
  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("Bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  // ⏺ REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("Bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted!");
  }
  return data;
}
