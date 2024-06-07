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
import { AppDispatch, RootState } from "../../../containers/store/store";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../../containers/store/login.slice";
import { TLoginState } from "../../../types/types";
import "./login.scss";
import { fetchUserData } from "../../../containers/store/user.slice";
import { resetSuccess } from "../../../containers/store/auth.slice";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isSuccess = useSelector(
    (state: RootState) => state.login.isSuccessLogin
  );
  const isSuccesLogin = useSelector(
    (state: RootState) => state.login.isSuccessLogin
  );
  const isSuccessRegiser = useSelector(
    (state: RootState) => state.auth.isSuccess
  );
  const isError = useSelector((state: RootState) => state.login.isError);
  const isLoading = useSelector((state: RootState) => state.login.isLoading);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isSuccesLogin) {
      dispatch(fetchUserData());
      navigate("/dashboard");
    }

    if (isSuccessRegiser) {
      setInterval(() => {
        dispatch(resetSuccess());
      }, 2500);
    }

    if (isError) {
      setError(isError);
      setInterval(() => {
        setError(null);
      }, 2500);
    }
  }, [isSuccess, isError, dispatch, history]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData: TLoginState = {
      email: email,
      password: password,
    };
    dispatch(signInUser(loginData));
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
              type={showPassword ? "text" : "password"}
              className="fieldInput"
              label="Пароль"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
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
          {isSuccessRegiser && (
            <Alert severity="success" variant="filled">
              Аккаунт успешно создан!
            </Alert>
          )}
          {error && (
            <Alert severity="error" variant="filled">
              {error}
            </Alert>
          )}
          {isLoading && <CircularProgress />}
        </form>
      </div>
    </div>
  );
};

export default Login;
