import { userSlice } from "../reducers/userSliceReducer";

export const { storeIsOnboarded, storeTokens, storeUserProfile, clearTokens } =
  userSlice.actions;
