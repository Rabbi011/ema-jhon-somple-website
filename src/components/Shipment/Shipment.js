import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const[email, setEmail] = useState('')
    const[name, setName] = useState('')
    const[address, setAddress] = useState('')
    const[phone, setPhone] = useState('')
    const[error, setError] = useState('')
    const navigate = useNavigate();

    const handelNameBlur = event =>{
        setName(event.target.value)
    }


    const handelAddressBlur = event =>{
        setAddress(event.target.value)
    }

    const handelPhoneBlur = event =>{
        setPhone(event.target.value)
    }

    const handelCreateUser = event =>{
        event.preventDefault();
        const shipping = {name, phone, email, address};
        console.log(shipping);
       
    }
    return (
        
        <div className='form-container'>
        <div>
            <form onSubmit={handelCreateUser}> 
                <div>
                    <h2 className='font-title'>Shipping Information</h2>
                    <div className="input-group">
                        <label htmlFor='name'>Name</label>
                        <input onBlur={handelNameBlur} type="text" name="name" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor='address'>Address</label>
                        <input onBlur={ handelAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='phone'>phone</label>
                        <input onBlur={handelPhoneBlur} type="text" name="phone" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="AddShipping" />
                </div>
            </form>
            
        </div>
    </div>
    );
};

export default Shipment;