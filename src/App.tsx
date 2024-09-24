import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccessToken,
  getClientToken,
  getIsOnboarded,
  getUserProfile,
} from "./redux/reducers/userSliceReducer";
import {
  useLazyGetStoreInfoQuery,
  useLazyGetUserProfileQuery,
} from "./redux/services";
import Admin from "./Views/Admin/Admin";
import Dashboard from "./Views/Dashboard/Dashboard";
import {
  storeIsOnboarded,
  storeUserProfile,
} from "./redux/actions/UserActions";
import Onboarding from "./Views/Onboarding/Onboarding";

import Spinner from "react-bootstrap/Spinner";

function App() {
  const dispatch = useDispatch();
  const accessToken = useSelector(getAccessToken);
  const clientToken = useSelector(getClientToken);
  const isOnboarded = useSelector(getIsOnboarded);
  const userProfile = useSelector(getUserProfile);

  const [getProfile, { isLoading: userProfileIsLoading }] =
    useLazyGetUserProfileQuery();
  const [getStoreInfo, { isLoading: storeInfoIsLoading }] =
    useLazyGetStoreInfoQuery();

  useEffect(() => {
    if (accessToken) {
      console.log(accessToken, clientToken);
      getProfile()
        .unwrap()
        .then((profile) => {
          dispatch(storeUserProfile(profile));
          if (profile.view.type !== "ADMIN") {
            const id = profile.accesses?.[0].store_id;
            getStoreInfo(id)
              .unwrap()
              .then((store) => {
                dispatch(
                  storeIsOnboarded(
                    store.store.onboarding_procedure.onboarding_status ===
                      "DONE"
                  )
                );
              });
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      {userProfileIsLoading || storeInfoIsLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Routes>
          <Route path="/login" element={<Landing />} />
          {userProfile?.view.type === "ADMIN" ? (
            <Route path="/" element={<Admin />} />
          ) : isOnboarded ? (
            <Route path="/" element={<Dashboard />} />
          ) : (
            <Route path="/" element={<Onboarding />} />
          )}
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
