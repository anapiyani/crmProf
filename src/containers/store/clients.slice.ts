import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosCrm from "../../config/axios.config";
import { TAuthStateInit } from "../../types/types";

type TInitialState = {
  clients: TAuthStateInit[];
  admins: TAuthStateInit[];
  staff: TAuthStateInit[];
  loading: boolean;
  error: string | null;
};

const initialState: TInitialState = {
  clients: [],
  admins: [],
  staff: [],
  loading: false,
  error: null,
};

export const getClients = createAsyncThunk(
  "clients/getClients",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axiosCrm("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getClients.fulfilled, (state, action) => {
        state.loading = false;
        const users = action.payload;
        state.clients = users.filter(
          (user: TAuthStateInit) => user.role === "user"
        );
        state.admins = users.filter(
          (user: TAuthStateInit) => user.role === "admin"
        );
        state.staff = users.filter(
          (user: TAuthStateInit) => user.role === "staff"
        );
      })
      .addCase(getClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default clientsSlice.reducer;
