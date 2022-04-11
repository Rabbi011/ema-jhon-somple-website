import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <form>
                    <div>
                        <h2 className='font-title'>Login</h2>
                        <div className="input-group">
                            <label htmlFor='email'>Email</label>
                            <input type="email" name="email" id="" />
                        </div>

                        <div className="input-group">
                            <label htmlFor='password'>Password</label>
                            <input type="password" name="password" id="" />
                        </div>
                        <input className='form-submit' type="submit" value="Login" />
                    </div>
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create a new account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;