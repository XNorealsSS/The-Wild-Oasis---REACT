// // //
import DashboardFilter from "../components/dashboard/DashboardFilter";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}
