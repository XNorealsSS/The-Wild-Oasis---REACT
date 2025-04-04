// // //
import UpdateSettingsForm from "../settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Settings() {
  return (
    <Row>
      <Heading as="h1" className="mb-6! mt-10!">
        Update hotel settings!
      </Heading>
      <UpdateSettingsForm />
    </Row>
  );
}
