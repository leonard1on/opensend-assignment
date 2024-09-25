import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { clearTokens } from "../redux/actions/UserActions";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearTokens());
    navigate("/login");
  };
  return (
    <Button className="mt-2 w-30" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
