import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { UserProfile } from "../../types/responses/UserProfile";

export const getAccessToken = (state: RootState) => state.user.accessToken;
export const getClientToken = (state: RootState) => state.user.clientToken;

interface userSlice {
  accessToken: string;
  clientToken: string;
  userProfile?: UserProfile;
}

const initialState: userSlice = {
  accessToken: localStorage.getItem("accessToken") || "",
  clientToken: localStorage.getItem("clientToken") || "",
  userProfile: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeTokens(
      state,
      action: PayloadAction<{ accessToken: string; clientToken: string }>
    ) {
      const { accessToken, clientToken } = action.payload;

      state.accessToken = accessToken;
      state.clientToken = clientToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("clientToken", clientToken);
    },
    clearTokens(state) {
      state.accessToken = "";
      state.clientToken = "";
      localStorage.removeItem("accessToken");
      localStorage.removeItem("clientToken");
    },
  },
});

export default userSlice.reducer;
