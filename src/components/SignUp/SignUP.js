import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUP = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[error, setError] = useState('')

    const handelEmailBlur = event =>{
        setEmail(event.target.value)
    }

    const handelPasswordBlur = event =>{
        setPassword(event.target.value)
    }
    
    const handelConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }
    
    const handelCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Password did not match')
            return;
        }
    }


    return (
        <div className='form-container'>
        <div>
            <form onSubmit={handelCreateUser}> 
                <div>
                    <h2 className='font-title'>SignUp</h2>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onBlur={ handelPasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input onBlur={handelConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </div>
            </form>
            <p>
                Already Have an account? <Link className='form-link' to="/login">Login</Link>
            </p>
        </div>
    </div>
    );
};

export default SignUP;