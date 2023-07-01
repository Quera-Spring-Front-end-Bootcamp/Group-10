import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import workspaceSlice from "./slices/workspaceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    workSpace: workspaceSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
