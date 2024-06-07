import Login from "../../components/auth/login/login";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../store/login.slice";
import { TLoginState } from "../../types/types";
import { fetchUserData } from "../store/user.slice";
import { resetSuccess } from "../store/auth.slice";

const LoginContainer = () => {
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
  }, [isSuccess, isError, dispatch, history]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const loginHandler = (email: string, password: string) => {
    const loginData: TLoginState = {
      email: email,
      password: password,
    };
    dispatch(signInUser(loginData));
  };

  return (
    <Login
      loginHandler={loginHandler}
      isError={isError}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      isSuccessRegiser={isSuccessRegiser}
      isLoading={isLoading}
    />
  );
};

export default LoginContainer;
