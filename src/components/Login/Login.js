import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

    const handelEmailBlur = event =>{
        setEmail(event.target.value)
    }

    const handelPasswordBlur = event =>{
        setPassword(event.target.value)
    }

    const handelUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    if(user){
        navigate(from,{ replace:true})
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handelUserSignIn}>
                    <div>
                        <h2 className='font-title'>Login</h2>
                        <div className="input-group">
                            <label htmlFor='email'>Email</label>
                            <input onBlur={handelEmailBlur} type="email" name="email" id="" required/>
                        </div>

                        <div className="input-group">
                            <label htmlFor='password'>Password</label>
                            <input onBlur={handelPasswordBlur} type="password" name="password" id="" required/>
                        </div>
                        <p>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }
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