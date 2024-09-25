// import React from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import LogoutButton from "../../Components/LogoutButton";
import { getTheme } from "../../redux/reducers/userSliceReducer";
import SwitchThemeButton from "../../Components/SwitchThemeButton";

const Dashboard = () => {
  const theme = useSelector(getTheme);
  return (
    <Container data-bs-theme={theme}>
      <Card>
        <Card.Body className="d-flex flex-column align-items-center">
          <SwitchThemeButton />
          <h1 className="align-self-center">Dashboard page</h1>
          <LogoutButton />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
