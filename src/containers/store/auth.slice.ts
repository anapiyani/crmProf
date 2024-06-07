import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TAuthState, TLoginState } from "../../types/types";
import axiosCrm from "../../config/axios.config";

type TInitialState = {
  isLoading: boolean;
  isError: string | null;
  isSuccess: boolean;
};

const authState: TInitialState = {
  isLoading: false,
  isError: null,
  isSuccess: false,
};

export const createNewUser = createAsyncThunk(
  "authSlice/createNewUser",
  async (formData: TAuthState) => {
    const response = await axiosCrm.post("/users/register/", formData);
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    resetSuccess(state) {
      state.isSuccess = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createNewUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = null;
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError =
          "Упс, какая то ошибка. Попробуйте еще раз" || action.error.message;
      })
      .addCase(createNewUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
        state.isSuccess = true;
      });
  },
});

export const { resetSuccess } = authSlice.actions;
export default authSlice.reducer;
