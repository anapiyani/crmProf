import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosCrm from "../../config/axios.config";
import { TRequest } from "../../types/types";

type TInitialState = {
  requests: TRequest[];
  loading: boolean;
  error: string | null;
};

const initialState: TInitialState = {
  requests: [],
  loading: false,
  error: null,
};

export const dashboardInfo = createAsyncThunk(
  "dashboard/dashboardInfo",
  async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axiosCrm("/api/v1/requests/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching dashboard info:", error);
      throw error;
    }
  }
);

export const downloadExcel = createAsyncThunk(
  "dashboard/downloadExcel",
  async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axiosCrm.get("/api/v1/export_data_to_excel/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      });
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "services_requests_data.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return response.data;
    } catch (error) {
      console.error("Error downloading Excel:", error);
      throw error;
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(dashboardInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(dashboardInfo.fulfilled, (state, action) => {
      state.requests = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(dashboardInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Error fetching dashboard info.";
    });
  },
});

export default dashboardSlice.reducer;
