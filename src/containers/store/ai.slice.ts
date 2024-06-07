import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosCrm from "../../config/axios.config";

type TSendData = {
  history: {
    role: string;
    message: string;
  }[];
  question: string;
  name: string | undefined;
  do_streaming: boolean;
};

interface AiSendResponse {
  bot_response: {
    content: {
      answer: string;
    };
  };
}

type TInitialState = {
  loading: boolean;
  error: string | null;
  chatHistory: {
    role: string;
    message: string;
  }[];
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  chatHistory: [],
};

export const aiSend = createAsyncThunk<AiSendResponse, TSendData>(
  "ai/aiSend",
  async (question: TSendData) => {
    const token = localStorage.getItem("accessToken");
    const response = await axiosCrm.post(
      "/bot/ask_support_and_save_history/",
      question,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);

const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {
    addBotMessageToHistory(state, action) {
      state.chatHistory.push({
        role: "bot",
        message: action.payload.answer,
      });
    },
    addUserMessageToHistory(state, action) {
      console.log(action.payload.message); // Логируем правильное свойство
      state.chatHistory.push({
        role: "user",
        message: action.payload.message,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(aiSend.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(aiSend.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.bot_response.content.answer) {
        const { answer } = action.payload.bot_response.content;
        state.chatHistory.push({
          role: "bot",
          message: answer,
        });
      }
    });
    builder.addCase(aiSend.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "An error occurred.";
    });
  },
});

export const {
  addBotMessageToHistory,
  addUserMessageToHistory,
} = aiSlice.actions;
export default aiSlice.reducer;
