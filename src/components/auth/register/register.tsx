import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import './register.scss';

const Register = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
    };

    return (
        <div className="register-container">
            <div className="signUp-container">
                <div className="signUp-header">
                    <h1>Регистрация</h1>
                    <p>Уже есть аккаунт? <Link className='To-register' to="/login">Войдите здесь</Link></p>
                </div>
                <form className="form-content">
                    <div className="form-inputs-signUp">
                        <div className="name">
                            <TextField required className='fieldInputSignUp' id="outlined-basic" label="Имя" variant="outlined" />
                            <TextField required className='fieldInputSignUp' id="outlined-basic" label="Фамилия" variant="outlined" />
                        </div>
                            <TextField required className='fieldInput' id="outlined-basic" label="Email" variant="outlined" />
                            <TextField
                            required
                            type={showPassword ? 'text' : 'password'}
                            className='fieldInput'
                            id="outlined-basic"
                            label="Пароль"
                            variant="outlined"
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
                                    onMouseDown={(e) => handleMouseDownPassword(e)}
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
                        <Button className='button' variant='contained'>Создать аккаунт</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;