import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosCrm from "../../config/axios.config";
import { TServices } from "../../types/types";

type TInitialState = {
  services: TServices[];
  loading: boolean;
  iserror: boolean;
};

const servicesState: TInitialState = {
  services: [],
  loading: false,
  iserror: false,
};

export const getServices = createAsyncThunk(
  "services/getServices",
  async () => {
    const token = localStorage.getItem("accessToken");
    const response = await axiosCrm("/api/v1/services/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: servicesState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getServices.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getServices.rejected, (state) => {
        state.loading = false;
        state.iserror = true;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.loading = false;
        state.iserror = false;
      });
  },
});

export default loginSlice.reducer;
