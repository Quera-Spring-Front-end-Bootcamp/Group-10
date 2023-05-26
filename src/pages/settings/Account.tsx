import { useForm } from "react-hook-form";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";

type RegisterFormData = {
  email: string;
  username: string;
  password: number;
  isAccepted: boolean;
};

function Account() {
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
    <div className="flex flex-col items-start justify-start pt-40 pr-14">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pb-8">
        اطلاعات حساب
      </h1>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-7 w-80">
        <TextInput
          type="email"
          label="ایمیل"
          className="w-full"
          register={register("email", {
            required: "این فیلد الزامی است!",
          })}
          name="email"
          hint={errors.email?.message}
          containerClassName="mb-4"
        />
        <TextInput
          type="password"
          label="رمز عبور"
          className="w-full"
          register={register("password", {
            min: 8,
            required: "این فیلد الزامی است!",
          })}
          name="password"
          hint={errors.password?.message}
          containerClassName="mb-4"
        />
        <TextInput
          type="text"
          label="نام کاربری"
          className="w-full"
          register={register("username", {
            required: "این فیلد الزامی است!",
          })}
          name="username"
          hint={errors.username?.message}
          containerClassName="mb-4"
        />
        <Button className="w-full mt-8" type="submit">
          ثبت تغییرات
        </Button>
      </form>
    </div>
  );
}

export default Account;
