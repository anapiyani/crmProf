import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './login.scss';

const Login = () => {
    return (
        <div className="login-container">
            <div className="signIn-container">
                <div className="signIn-header">
                    <h1>Sign in</h1>
                    <p>Don't have an account yet? <Link className='To-register' to="/register">Sign up here</Link></p>
                </div>
                <form className="form-content">
                    <div className="form-inputs">
                        <TextField className='fieldInput' id="outlined-basic" label="Email" variant="outlined" />
                        <TextField type="password" className='fieldInput' id="outlined-basic" label="Password" variant="outlined" />
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