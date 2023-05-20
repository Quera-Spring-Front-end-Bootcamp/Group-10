import Link from "../components/ui/QLink";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import { useForm, SubmitHandler } from "react-hook-form";

type TextInput = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TextInput>();
  const onSubmit: SubmitHandler<TextInput> = (data) => console.log("enter", data);

  return (
    <div style={{ width: "517px", height: "429px", border: "2px solid black" }}>
      <div className="container mx-auto p-6">
        <div className="flex">
          <h1 className="font-semibold text-[32px]/[49.57px] text-right tracking-tight">
            به کوئرا تسک منیجر خوش برگشتی :){" "}
          </h1>
        </div>
        <form action="POST">
          <div className="flex flex-col mt-[29px]">
            <TextInput label="ایمیل" className="w-full" {...register("email")} />
          </div>
          <div className="flex flex-col pt-5 mb-8">
            <TextInput label="رمز عبور" className="w-full" {...register("password")} />
            <Link to={""} className="font-semibold text-xs/[18.59px] text-primary mt-2">
              رمز عبور خود را فراموش کردید؟
            </Link>
          </div>
          <Button className="w-full" onClick={handleSubmit(onSubmit)}>
            <Link to="/register" className="text-white">
              ورود
            </Link>
          </Button>
        </form>
        <div className="flex justify-center mt-5">
          <p>ثبت نام نکرده ای؟</p>
          <Link to={""} className="font-semibold text-base/[25.07px] text-primary mr-[8px]">
            ثبت نام
          </Link>
        </div>
      </div>
      {/* end of container design */}
    </div>
  );
};

export default Login;
