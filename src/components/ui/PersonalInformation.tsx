import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import Button from "./Button";

type RegisterFormData = {
  name: string;
  lastname: string;
  tell: number;
  isAccepted: boolean;
};

function PersonalInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onTouched",
  });

  function handleSubmitForm(data: RegisterFormData) {
    console.log(data);
  }

  return (
    <div className="flex flex-col w-screen h-screen items-start justify-start pt-44 pr-12">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
        اطلاعات فردی
      </h1>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-7 w-80">
        <TextInput
          type="text"
          label="نام"
          className="w-full"
          register={register("name", {
            required: "این فیلد الزامی است!",
          })}
          name="name"
          hint={errors.name?.message}
          containerClassName="mb-4"
        />
        <TextInput
          type="text"
          label="نام خانوادگی"
          className="w-full"
          register={register("lastname", {
            required: "این فیلد الزامی است!",
          })}
          name="lastname"
          hint={errors.lastname?.message}
          containerClassName="mb-4"
        />
        <TextInput
          type="number"
          label="شماره موبایل"
          className="w-full"
          register={register("tell", {
            max: 11,
            required: "این فیلد الزامی است!",
          })}
          name="tell"
          hint={errors.tell?.message}
          containerClassName="mb-4"
        />
        <Button className="w-full" type="submit">
          ثبت تغییرات
        </Button>
      </form>
    </div>
  );
}

export default PersonalInformation;
