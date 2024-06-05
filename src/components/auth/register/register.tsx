import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { AppDispatch } from '../../../containers/store/store';
import { IconButton, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import { TAuthState } from '../../../types/types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { createNewUser } from '../../../containers/store/auth.slice';
import './register.scss';

const Register = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [formData, setFormData] = useState<TAuthState>({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        phone_number: '',
        password: '',
    });

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createNewUser(formData));
    };

    return (
        <div className="register-container">
            <div className="signUp-container">
                <div className="signUp-header">
                    <h1>Регистрация</h1>
                    <p>Уже есть аккаунт? <Link className='To-register' to="/login">Войдите здесь</Link></p>
                </div>
                <form className="form-content" onSubmit={handleSubmit}>
                    <div className="form-inputs-signUp">
                        <div className="name">
                            <TextField
                                required
                                className='fieldInputSignUp'
                                id="outlined-basic"
                                label="Имя"
                                variant="outlined"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                className='fieldInputSignUp'
                                id="outlined-basic"
                                label="Фамилия"
                                variant="outlined"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                        </div>
                        <TextField
                            required
                            className='fieldInput'
                            id="outlined-basic"
                            label="Email"
                            type='email'
                            variant="outlined"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            className='fieldInput'
                            id="outlined-basic"
                            label="Номер телефона"
                            type="tel"
                            variant="outlined"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            className='fieldInput'
                            id="outlined-basic"
                            label="Имя пользователя"
                            variant="outlined"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            type={showPassword ? 'text' : 'password'}
                            className='fieldInput'
                            id="outlined-basic"
                            label="Пароль"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            required
                            type={showPassword ? 'text' : 'password'}
                            className='fieldInput'
                            id="outlined-basic"
                            label="Повторите пароль"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="buttons">
                        <Button className='button' variant='contained' type="submit">Создать аккаунт</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
