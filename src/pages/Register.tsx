import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const Register = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Register Page</h1>
      <Button onClick={handleGoToLogin}>Go To Login</Button>
    </div>
  );
};

export default Register;
