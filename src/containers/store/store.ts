import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import userReducer from "./user.slice";
import loginReducer from "./login.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
