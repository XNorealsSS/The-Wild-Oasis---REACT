// // //
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "../../hooks/cabins/useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

export default function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resource="cabins" />;

  // ⏺ 1) FILTER
  const filterValue = searchParams.get("discount") || "all";
  // console.log(filterValue);
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // ⏺ 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  // console.log(field, direction);
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    // ⏺ Compound Component Pattern
    <Menus>
      <div className="overflow-x-auto! w-full!">
        <Table
          className="min-w-[750px] md:min-w-[800px]!"
          $columns="1fr 1.2fr 2.4fr 1.4fr 1fr 1fr"
        >
          <Table.Header className="shadow! shadow-gray-400! text-2xl!">
            <div></div>
            <div className="border-b-2 w-fit border-b-gray-400">Cabin</div>
            <div className="border-b-2 w-fit border-b-gray-400">Capacity</div>
            <div className="border-b-2 w-fit border-b-gray-400">Price</div>
            <div className="border-b-2 w-fit border-b-gray-400">Discount</div>
            <div></div>
          </Table.Header>

          {/* ⏺ Render Props Pattern */}
          <Table.Body
            // data={filteredCabins}
            data={sortedCabins}
            render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
          />
        </Table>
      </div>
    </Menus>
  );
}
