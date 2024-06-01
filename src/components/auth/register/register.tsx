import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './register.scss';

const Register = () => {
    return (
        <div className="register-container">
            <div className="signUp-container">
                <div className="signUp-header">
                    <h1>Sign up</h1>
                    <p>Already have an account? <Link className='To-register' to="/login">Sign in here</Link></p>
                </div>
                <form className="form-content">
                    <div className="form-inputs-signUp">
                        <div className="name">
                            <TextField className='fieldInputSignUp' id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField className='fieldInputSignUp' id="outlined-basic" label="Last Name" variant="outlined" />
                        </div>
                        <TextField className='fieldInput' id="outlined-basic" label="Email" variant="outlined" />
                        <TextField type="password" className='fieldInput' id="outlined-basic" label="Password" variant="outlined" />
                        <TextField type="password" className='fieldInput' id="outlined-basic" label="Confirm password" variant="outlined" />
                    </div>
                    <div className="buttons">
                        <Button className='button' variant='contained'>Create an account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;