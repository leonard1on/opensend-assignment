import { userSlice } from "../reducers/userSliceReducer";

export const {
  storeIsOnboarded,
  storeTokens,
  storeUserProfile,
  switchThemes,
  clearTokens,
} = userSlice.actions;
