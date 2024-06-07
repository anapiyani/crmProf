import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosCrm from "../../config/axios.config";
import { TuserData } from "../../types/types";

type TInitialState = {
  data: TuserData | null;
  isLoading: boolean;
  isError: string | null;
};

const initialState: TInitialState = {
  data: null,
  isLoading: false,
  isError: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const token = localStorage.getItem("accessToken");
    const response = await axiosCrm("/users/user-by-token/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Failed to fetch user data";
      });
  },
});

export default userSlice.reducer;
