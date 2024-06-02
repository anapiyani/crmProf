import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton, InputAdornment } from '@mui/material';
import './login.scss';

const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
    };

    return (
        <div className="login-container">
            <div className="signIn-container">
                <div className="signIn-header">
                    <h1>Sign in</h1>
                    <p>Don't have an account yet? <Link className='To-register' to="/register">Sign up here</Link></p>
                </div>
                <form className="form-content">
                    <div className="form-inputs">
                        <TextField required className='fieldInput' id="outlined-basic" label="Email" variant="outlined" />
                        <TextField
                            required
                            type={showPassword ? 'text' : 'password'}
                            className='fieldInput'
                            id="outlined-basic"
                            label="Password"
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
                        <Link to="forgot-password" className='forgot-pass'>Forgot password?</Link>    
                    </div>
                    <div className="buttons">
                        <Button className='button' variant='contained'>Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;