import Link from "../components/ui/QLink";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import { useForm } from "react-hook-form";
import Card from "../components/ui/Card";

type LoginFormData = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onTouched",
  });

  function handleSubmitForm(data: LoginFormData) {
    console.log(data);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card>
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          به کوئرا تسک منیجر خوش برگشتی :)
        </h1>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="my-7">
          <TextInput
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
          />
          <TextInput
            label="رمز عبور"
            className="w-full"
            containerClassName="mt-4"
            name="password"
            register={register("password", {
              required: "این فیلد الزامی است!",
            })}
            hint={errors.password?.message}
          />
          <Link
            to="/forget-password"
            className="font-semibold text-xs text-primary mt-2 mb-4 block"
          >
            رمز عبور خود را فراموش کردید؟
          </Link>
          <Button className="w-full" type="submit">
            ورود
          </Button>
        </form>
        <div className="flex justify-center mt-5 gap-2">
          <span>ثبت نام نکرده ای؟</span>
          <Link to="/register" className="font-semibold text-primary">
            ثبت نام
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Login;
