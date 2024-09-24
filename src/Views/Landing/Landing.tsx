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
  // getClientToken,
} from "../../redux/reducers/userSliceReducer";
import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Navigate } from "react-router-dom";
import { UserProfile } from "../../types/responses/UserProfile";

const Landing = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getAccessToken);
  // const clientToken = useSelector(getClientToken);

  const [email, setEmail] = useState<string>("");
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
      .catch((err) => setMessage(err.error));
  };

  if (accessToken) {
    return <Navigate to={"/"} />;
  }

  return (
    <Container className="m-2">
      <Card className="p-4">
        <Card.Body className="d-flex flex-column">
          <h2 className="align-self-center">Welcome back!</h2>
          <p className="align-self-center">Log in to continue with Opensend</p>
          <Form>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
            />
            <Form.Control
              className="mt-2"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password}
            />
          </Form>
          <div className="mt-4 d-flex flex-column align-content-center">
            {message && <p className="red">{message}</p>}
            <Button className="w-100" variant="primary" onClick={handleLogin}>
              Login
            </Button>
            <Button
              className="mt-2 w-100"
              variant="secondary"
              onClick={() => dispatch(clearTokens())}
            >
              Forgot your password?
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Landing;
