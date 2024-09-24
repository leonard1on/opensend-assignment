import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { UserProfile } from "../../types/responses/UserProfile";

export const getAccessToken = (state: RootState) => state.user.accessToken;
export const getClientToken = (state: RootState) => state.user.clientToken;
export const getUserProfile = (state: RootState) => state.user.userProfile;
export const getIsOnboarded = (state: RootState) => state.user.isOnboarded;

interface userSlice {
  accessToken: string;
  clientToken: string;
  userProfile?: UserProfile;
  isOnboarded: boolean;
}

const initialState: userSlice = {
  accessToken: localStorage.getItem("accessToken") || "",
  clientToken: localStorage.getItem("clientToken") || "",
  userProfile: undefined,
  isOnboarded: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeIsOnboarded(state, action: PayloadAction<boolean>) {
      state.isOnboarded = action.payload;
    },
    storeUserProfile(state, action: PayloadAction<UserProfile>) {
      state.userProfile = action.payload;
    },
    storeTokens(
      state,
      action: PayloadAction<{ accessToken: string; clientToken: string }>
    ) {
      const { accessToken, clientToken } = action.payload;

      state.accessToken = accessToken;
      state.clientToken = clientToken;
      if (accessToken) localStorage.setItem("accessToken", accessToken);
      if (clientToken) localStorage.setItem("clientToken", clientToken);
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
