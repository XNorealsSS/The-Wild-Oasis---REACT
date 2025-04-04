// // //
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useSettings } from "../hooks/settings/useSettings";
import Spinner from "../ui/Spinner";
import { useUpdateSetting } from "../hooks/settings/useUpdateSetting";

export default function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  const handleUpdate = (e, settingKey) => {
    const newValue = e.target.value;
    if (!newValue) return;
    updateSetting({ [settingKey]: newValue });
  };

  if (isLoading) return <Spinner />;

  return (
    <Form className="w-full! md:w-[90%]! xl:w-[60%]! border-2! shadow shadow-gray-400 border-[var(--color-grey-300)]!">
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          className="w-full!"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          className="w-full!"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          className="w-full!"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          className="w-full!"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}
