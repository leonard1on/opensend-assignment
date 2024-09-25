// import React from "react";

import { useSelector } from "react-redux";
import {
  getTheme,
  getUserProfile,
} from "../../redux/reducers/userSliceReducer";
import { Navigate } from "react-router-dom";
import LogoutButton from "../../Components/LogoutButton";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import SwitchThemeButton from "../../Components/SwitchThemeButton";

const Onboarding = () => {
  const user = useSelector(getUserProfile);
  const theme = useSelector(getTheme);
  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <Container data-bs-theme={theme}>
      <Card>
        <Card.Body className="d-flex flex-column align-items-center">
          <SwitchThemeButton />
          <h1 className="align-self-center">Onboarding page</h1>
          <LogoutButton />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Onboarding;
