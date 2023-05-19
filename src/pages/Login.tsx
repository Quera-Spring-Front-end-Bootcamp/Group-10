import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Login = () => {
  return (
    <div>
      <h1>صفحه لاگین</h1>
      <p>ss</p>
      <Button>
        <Link to="/register">انتقال به صفحه ساخت کاربر</Link>
      </Button>
    </div>
  );
};

export default Login;
