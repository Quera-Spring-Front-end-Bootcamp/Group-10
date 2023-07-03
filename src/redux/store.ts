import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import workspaceSlice from "./slices/workspaceSlice";
import projectSlice from "./slices/projectSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    workSpace: workspaceSlice,
    project: projectSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
