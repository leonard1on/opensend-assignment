import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import { useSelector } from "react-redux";
import {
  getAccessToken,
  getClientToken,
} from "./redux/reducers/userSliceReducer";
import { useLazyGetUserProfileQuery } from "./redux/services";
import Admin from "./Views/Admin/Admin";
// import Onboarding from "./Views/Onboarding/Onboarding";
import Dashboard from "./Views/Dashboard/Dashboard";

// import Spinner from "react-bootstrap/Spinner";

function App() {
  const accessToken = useSelector(getAccessToken);
  const clientToken = useSelector(getClientToken);

  const [getProfile] = useLazyGetUserProfileQuery();

  useEffect(() => {
    if (clientToken && accessToken) {
      console.log(accessToken, clientToken);
      getProfile()
        .unwrap()
        .then((resp) => {
          console.log(resp);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Landing />} />
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/Onboarding" element={<Onboarding />} /> */}
        <Route path="/" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
