import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import Checkbox from "../components/ui/Checkbox";
import Card from "../components/ui/Card";
import { useForm } from "react-hook-form";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  isAccepted: boolean;
};

function Register() {
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
    <div className="flex w-screen h-screen items-center justify-center">
      <Card>
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          ثبت نام در کوئرا تسک منیجر
        </h1>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-7">
          <TextInput
            type="text"
            label="نام کامل"
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
            label="ایمیل"
            className="w-full"
            register={register("email", {
              required: "این فیلد الزامی است!",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "ایمیل به درستی وارد نشده است!",
              },
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
              required: "این فیلد الزامی است!",
            })}
            name="password"
            hint={errors.password?.message}
            containerClassName="mb-4"
          />
          <Checkbox
            className="mb-4"
            label="قوانین و مقررات را می پذیرم."
            register={register("isAccepted", {
              required: "این فیلد الزامی است!",
            })}
            hint={errors.isAccepted?.message}
          />
          <Button className="w-full" type="submit">
            ثبت نام
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Register;
