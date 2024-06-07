import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton, InputAdornment } from '@mui/material';
import { AppDispatch } from '../../../containers/store/store';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../../containers/store/auth.slice';
import { TLoginState } from '../../../types/types';
import './login.scss';

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
    };

    const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginData: TLoginState = {
            email: email,
            password: password,
        }
        dispatch(signInUser(loginData))
    }

    return (
        <div className="login-container">
            <div className="signIn-container">
                <div className="signIn-header">
                    <h1>Войти</h1>
                    <p>Еще нет аккаунта? <Link className='To-register' to="/register">Зарегистрируйтесь здесь</Link></p>
                </div>
                <form onSubmit={(e) => loginHandler(e)} className="form-content">
                    <div className="form-inputs">
                        <TextField required className='fieldInput' onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                        <TextField
                            required
                            type={showPassword ? 'text' : 'password'}
                            className='fieldInput'
                            label="Пароль"
                            variant="outlined"
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={(e) => handleMouseDownPassword(e)}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                            />
                        <Link to="forgot-password" className='forgot-pass'>Забыли пароль?</Link>    
                    </div>
                    <div className="buttons">
                        <Button type="submit" className='button' variant='contained'>Войти</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;