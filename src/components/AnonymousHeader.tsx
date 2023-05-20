import { useLocation, useNavigate } from "react-router-dom";
import Button from "./ui/Button";

function AnonymousHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    if (location.pathname === "/login") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  }
  return (
    <header className="p-8 flex flex-row justify-between items-center fixed w-screen">
      <span className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        کوئرا تسک منیجر
      </span>
      <div className="gap-2 flex flex-row items-center">
        <span className="hidden sm:block">
          {location.pathname === "/login"
            ? "ثبت نام نکرده ای؟"
            : "قبلا ثبت نام کرده ای؟"}
        </span>
        <Button onClick={handleClick}>
          {location.pathname === "/login" ? "ثبت‌نام" : "ورود"}
        </Button>
      </div>
    </header>
  );
}

export default AnonymousHeader;
