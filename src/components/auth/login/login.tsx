import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {
  Alert,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";
import "./login.scss";

type TProps = {
  loginHandler: (email: string, password: string) => void;
  isError: string | null;
  showPassword: boolean;
  handleClickShowPassword: () => void;
  isSuccessRegiser: boolean;
  isLoading: boolean;
};

const Login = (props: TProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (props.isError) {
      setError(props.isError);
      setInterval(() => {
        setError(null);
      }, 2500);
    }
  });

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.loginHandler(email, password);
  };
  return (
    <div className="login-container">
      <div className="signIn-container">
        <div className="signIn-header">
          <h1>Войти</h1>
          <p>
            Еще нет аккаунта?{" "}
            <Link className="To-register" to="/register">
              Зарегистрируйтесь здесь
            </Link>
          </p>
        </div>
        <form onSubmit={loginHandler} className="form-content">
          <div className="form-inputs">
            <TextField
              required
              className="fieldInput"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
            />
            <TextField
              required
              type={props.showPassword ? "text" : "password"}
              className="fieldInput"
              label="Пароль"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={props.handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {props.showPassword ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <VisibilityOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Link to="forgot-password" className="forgot-pass">
              Забыли пароль?
            </Link>
          </div>
          <div className="buttons">
            <Button type="submit" className="button" variant="contained">
              Войти
            </Button>
          </div>
          {props.isSuccessRegiser && (
            <Alert severity="success" variant="filled">
              Аккаунт успешно создан!
            </Alert>
          )}
          {props.isError && (
            <Alert severity="error" variant="filled">
              {error}
            </Alert>
          )}
          {props.isLoading && <CircularProgress />}
        </form>
      </div>
    </div>
  );
};

export default Login;
