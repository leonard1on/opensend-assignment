import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services";
import userSliceReducer from "../reducers/userSliceReducer";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
