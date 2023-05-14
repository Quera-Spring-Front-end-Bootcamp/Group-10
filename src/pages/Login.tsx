import { Link } from "react-router-dom";
import Button from "../components/ui/button";

const Login = () => {
  return (
    <div>
      <h1>login Page</h1>
      <Button>
        <Link to="/register">Go To Register</Link>
      </Button>
    </div>
  );
};

export default Login;
