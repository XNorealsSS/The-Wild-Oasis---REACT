// // //
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "../../hooks/cabins/useCreateCabin.js";
import { useUpdateCabin } from "../../hooks/cabins/useUpdateCabin.js";

export default function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const { isCreating, createCabin } = useCreateCabin();
  const { isUpdating, updateCabin } = useUpdateCabin();
  const isWorking = isCreating || isUpdating;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      updateCabin(
        {
          newCabinData: {
            ...data,
            image,
          },
          id: editId,
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <Form
      className="shadow! shadow-gray-400! border-2! border-[var(--color-grey-300)]!"
      type={onCloseModal ? "modal" : "regular"}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          className="w-full!"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required!",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          className="w-full!"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required!",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          className="w-full!"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required!",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          className="w-full!"
          defaultValue={0}
          {...regis// 



            hahahahahaaaah// 



            hahahahahaaaah// 



            hahahahahaaaah// 



            hahahahahaaaah// 



            hahahahahaaaahter("discount", {
            required: "This field is required!",
            validate: (value) =>
              value <= +getValues().regularPrice || "Less than regular price!",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id=// 



          hahahahahaaaah// 



          hahahahahaaaah// 



          hahahahahaaaah// 



          hahahahahaaaah"description"
          className="w-full!"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "This field is required!",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          className="shadow shadow-gray-400 p-2!"
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: isEditSession ? false : "This field is required!",
          })}
        />
      </FormRow>

      <div className="flex gap-6 justify-end">
        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </div>
    </Form>
  );
}

// 



hahahahahaaaah// 



hahahahahaaaah// 



hahahahahaaaah// 



hahahahahaaaah// 



hahahahahaaaah