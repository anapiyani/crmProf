import React from "react";
import {
  IconButton,
  InputAdornment,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { TAuthState } from "../../../types/types";
import "./register.scss";

type TProps = {
  formData: TAuthState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  isError: string | null;
  showPassword: boolean;
  handleClickShowPassword: () => void;
};

const Register = (props: TProps) => {
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="register-container">
      <div className="signUp-container">
        <div className="signUp-header">
          <h1>Регистрация</h1>
          <p>
            Уже есть аккаунт?{" "}
            <Link className="To-register" to="/login">
              Войдите здесь
            </Link>
          </p>
        </div>
        <form className="form-content" onSubmit={props.handleSubmit}>
          <div className="form-inputs-signUp">
            <div className="name">
              <TextField
                required
                className="fieldInputSignUp"
                label="Имя"
                variant="outlined"
                name="first_name"
                value={props.formData.first_name}
                onChange={props.handleChange}
              />
              <TextField
                required
                className="fieldInputSignUp"
                label="Фамилия"
                variant="outlined"
                name="last_name"
                value={props.formData.last_name}
                onChange={props.handleChange}
              />
            </div>
            <TextField
              required
              className="fieldInput"
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={props.formData.email}
              onChange={props.handleChange}
            />
            <TextField
              required
              className="fieldInput"
              label="Номер телефона"
              type="tel"
              variant="outlined"
              name="phone_number"
              value={props.formData.phone_number}
              onChange={props.handleChange}
            />
            <TextField
              required
              className="fieldInput"
              label="Имя пользователя"
              variant="outlined"
              name="username"
              value={props.formData.username}
              onChange={props.handleChange}
            />
            <TextField
              required
              type={props.showPassword ? "text" : "password"}
              className="fieldInput"
              label="Пароль"
              name="password"
              value={props.formData.password}
              onChange={props.handleChange}
              variant="outlined"
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
            <TextField
              required
              type={props.showPassword ? "text" : "password"}
              className="fieldInput"
              label="Повторите пароль"
              variant="outlined"
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
          </div>
          <div className="buttons">
            <Button className="button" variant="contained" type="submit">
              Создать аккаунт
            </Button>
          </div>
          {props.isLoading && <CircularProgress />}
          {props.isError && (
            <Alert variant="filled" severity="error">
              {props.isError}
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
