
import Register from "../../components/auth/register/register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../store/store";
import { createNewUser } from "../store/auth.slice";
import { useNavigate } from "react-router-dom";

const RegisterContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const isError = useSelector((state: RootState) => state.auth.isError);
  const isSuccess = useSelector((state: RootState) => state.auth.isSuccess);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    phone_number: "",
    password: "",
    role: "admin",
  });

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    }
  }, [isSuccess, navigate]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewUser(formData));
  };

  return (
    <Register
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      isError={isError}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
    />
  );
};

export default RegisterContainer;