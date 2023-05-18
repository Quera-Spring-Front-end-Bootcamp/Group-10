import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";

const Login = () => {
  return (
    <>
      <div>
        <h1>login Page</h1>
        <Button>
          <Link to="/register">Go To Register</Link>
        </Button>
      </div>
      <TextInput type="text" label="ایمیل" />
    </>
  );
};

export default Login;
