import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import userReducer from "./user.slice";
import loginReducer from "./login.slice";
import servicesReducer from "./services.slice";
import clientsReducer from "./clients.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    login: loginReducer,
    services: servicesReducer,
    clients: clientsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
