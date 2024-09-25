import { useState } from "react";
import { useLoginMutation } from "../../redux/services";
import { useDispatch, useSelector } from "react-redux";
import {
  storeTokens,
  storeUserProfile,
  clearTokens,
} from "../../redux/actions/UserActions";
import {
  getAccessToken,
  getTheme,
  // getClientToken,
} from "../../redux/reducers/userSliceReducer";
import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { Navigate } from "react-router-dom";
import { UserProfile } from "../../types/responses/UserProfile";
import "./Landing.css";
import opensendImage from "/opensend logo.png";
import SwitchThemeButton from "../../Components/SwitchThemeButton";

const Landing = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getAccessToken);
  const theme = useSelector(getTheme);
  // const clientToken = useSelector(getClientToken);

  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [login] = useLoginMutation();

  const handleLogin = () => {
    login({ email, password })
      .unwrap()
      .then((resp) => {
        console.log(resp);
        const payload: { accessToken: string; clientToken: string } = {
          accessToken: resp.tokens.accessToken,
          clientToken: resp.tokens.clientToken,
        };
        dispatch(storeTokens(payload));

        const userProfile: UserProfile = {
          message: resp.message,
          user: resp.user,
          accesses: resp.accesses,
          view: resp.view,
        };
        dispatch(storeUserProfile(userProfile));
      })
      .catch((err) => setMessage(err.data.message));
  };

  const handleEmail = (email: string) => {
    setEmail(email);
    validateEmail(email);
  };
  const validateEmail = (email: string) => {
    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  if (accessToken) {
    return <Navigate to={"/"} />;
  }

  return (
    <Container className="m-2 layout" data-bs-theme={theme}>
      <div className="mt-4 d-flex justify-content-center align-items-center theme-dark">
        <Image src={opensendImage} width={32} height={32} />
        <h1 className="mx-2 opensend">opensend</h1>
      </div>
      <Card className="p-4">
        <Card.Body className="d-flex flex-column">
          <SwitchThemeButton />
          <h2 className="align-self-center">Welcome back!</h2>
          <p className="align-self-center">Log in to continue with Opensend</p>
          <Form>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => handleEmail(e.currentTarget.value)}
              value={email}
              required
            />
            <Form.Control
              className="mt-2"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password}
              required
            />

            <div className="mt-4 d-flex flex-column align-content-center">
              {message && <p className="red align-self-center">{message}</p>}
              <Button
                className="w-100"
                variant="primary"
                disabled={!isEmailValid || !password}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button
                className="mt-2 w-100"
                variant={theme}
                onClick={() => dispatch(clearTokens())}
              >
                Forgot your password?
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Landing;
