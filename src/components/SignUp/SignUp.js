import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './SignUp.css';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user]= useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordlBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }


    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !==confirmPassword){
            setError("your password did't match");
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer')
            return;
        }

        createUserWithEmailAndPassword(email, password);

   /*      createUserWithEmailAndPassword(email,password)
        .then(result =>{
          //  const user = result.user;
            console.log('user created');
        }); */
    }
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>SignUp</h3>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur}  type='email' name='email' id='' required></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur}  type='password' name='password' id='' required></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input  onBlur={handleConfirmPasswordlBlur}  type='password' name='confirm-password' id='' required></input>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type='submit' value='Sign Up'></input>
                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>login</Link>
                </p>
                <div className='or'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>

                <button>
                    <img src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png' alt='' /> &nbsp;
                    <p>Continue with google</p>
                </button>
            </div>
        </div>

    );
};

export default SignUp;