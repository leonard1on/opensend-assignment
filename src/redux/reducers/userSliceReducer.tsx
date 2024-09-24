import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || "",
    clientToken: localStorage.getItem("clientToken") || "",
  },
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
