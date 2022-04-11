import React, { useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    //const navigate = useNavigate();

    const handleNamelBlur = event => {
        setName(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};  
        console.log(shipping);
    }

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'> Your Shipping Info</h3>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor='name'>Your name</label>
                        <input onBlur={handleNamelBlur} type='text' name='name' id='' required></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email'>Your Email</label>
                        <input value={user?.email} readOnly type='email' name='email' id='' required></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Address</label>
                        <input onBlur={handleAddressBlur} type='text' name='address' id='' required></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='phone'>Phone Number</label>
                        <input onBlur={handlePhoneBlur} type='text' name='phone-number' id='' required ></input>
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type='submit' value='Add shipping'></input>
                </form>
            </div>
        </div>
    );
};

export default Shipment;