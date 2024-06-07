import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "./teacherAi.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../containers/store/store";
import {
  aiSend,
  addUserMessageToHistory,
} from "../../containers/store/ai.slice";

type TSendData = {
  history: {
    role: string;
    message: string;
  }[];
  question: string;
  name: string | undefined;
  do_streaming: boolean;
};

const TeacherAi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [message, setMessage] = useState<string>("");
  const name = useSelector((state: RootState) => state.user.data?.first_name);
  const chatHistory = useSelector((state: RootState) => state.ai.chatHistory);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toSendData: TSendData = {
      history: [
        {
          role: "AI",
          message: "Hello, how can I help you?",
        },
      ],
      question: message,
      name: name ?? "",
      do_streaming: false,
    };
    dispatch(addUserMessageToHistory({ message }));
    dispatch(aiSend(toSendData));
  };

  console.log("Chat History:", chatHistory);

  return (
    <div className="teacher-ai">
      <div className="teacher-ai-content">
        <div className="chat-content">
          <div className="chat-header">
            <div className="ai-name">
              <SmartToyOutlinedIcon />
              <p>Чат AI</p>
            </div>
          </div>
          <div className="chat">
            <div className="messages">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.role === "user" ? "user" : "bot"}`}
                >
                  {msg.role === "bot" && <SmartToyOutlinedIcon />}
                  <p>{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="form-send">
            <form onSubmit={(e) => onSubmitHandler(e)} className="form">
              <OutlinedInput
                className="inputOutlined"
                placeholder="Сообщение..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <Button type="submit" className="formSendButton" variant="text">
                <SendOutlinedIcon />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAi;
