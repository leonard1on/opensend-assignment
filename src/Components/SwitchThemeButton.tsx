import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { switchThemes } from "../redux/actions/UserActions";

import "./Components.css";
import { getTheme } from "../redux/reducers/userSliceReducer";

const SwitchThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  const handleTheme = () => {
    dispatch(switchThemes());
  };
  return (
    <Button className={"m-3 round-btn " + theme} onClick={handleTheme}>
      {theme === "dark" ? "☀️" : "🌙"}
    </Button>
  );
};

export default SwitchThemeButton;
