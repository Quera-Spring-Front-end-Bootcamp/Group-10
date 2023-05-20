import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import Checkbox from "../components/ui/Checkbox";

const Register = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };
  const handleSubmit = () => {
    console.log("yes");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit}>
        <h3 className="text-[32px] font-semibold">
          ثبت نام در کوئرا تسک منیجر
        </h3>
        <TextInput className="mb-1 w-full" type="text" label="نام کامل" />
        <TextInput className="mb-1 w-full" type="email" label="ایمیل" />
        <TextInput className="mb-1 w-full" type="password" label="رمز عبور" />
        <Checkbox className="mb-4" label="قوانین و مقررات را می پذیرم." />
        <Button type="submit" className="w-full" onClick={handleGoToLogin}>
          ثبت نام
        </Button>
      </form>
    </div>
  );
};

export default Register;
