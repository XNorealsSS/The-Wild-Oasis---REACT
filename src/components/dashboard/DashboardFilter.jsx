// // //
import Filter from "../../ui/Filter";

export default function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        // { label: "Last 7 days" },
        // { label: "Last 30 days" },
        // { label: "Last 90 days" },

        { value: "7", label: "Last 7 days" },
        { value: "30", label: "Last 30 days" },
        { value: "90", label: "Last 90 days" },
      ]}
    />
  );
}
