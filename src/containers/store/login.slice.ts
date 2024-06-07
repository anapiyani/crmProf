import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TAuthState, TLoginState } from "../../types/types";
import axiosCrm from "../../config/axios.config";

type TInitialState = {
  isLoading: boolean;
  isError: string | null;
  isSuccessLogin: boolean;
};

const authState: TInitialState = {
  isLoading: false,
  isError: null,
  isSuccessLogin: false,
};

export const signInUser = createAsyncThunk(
  "authSlice/signInUser",
  async (loginData: TLoginState) => {
    const response = await axiosCrm.post("/users/login/", loginData);
    return response.data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: authState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccessLogin = false;
        state.isError = null;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccessLogin = false;
        state.isError =
          "Упс, какая-то ошибка. Попробуйте еще раз" || action.error.message;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.isSuccessLogin = true;
        const token = action.payload.access;
        if (token) {
          localStorage.setItem("accessToken", token);
        }
      });
  },
});

export default loginSlice.reducer;
