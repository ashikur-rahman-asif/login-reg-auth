import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth= getAuth(app)
const Register = () => {
    // const [email,setEmail]=useState('')
    const [error, setError] = useState('')
    const [success,setSuccess]=useState('')
    const handleEmailChange = (e) => {
        // console.log(e.target.value)
        // setEmail(e.target.value)
    }
    const [password,setPassword]=useState()
    const handlePasswordBlur = (e) => {
        // console.log(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password= e.target.password.value
        console.log(email, password)
        setError('')
        setSuccess('')
        // validate password 
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please add at least one upperCase')
            return
        }
        // create user in firebase 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                setError('')
                e.target.reset()
                sendVerificationEmail(loggedUser)
                setSuccess('User has created successfully')
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
                // setSuccess('')
            })
        const sendVerificationEmail = (loggedUser) => {
            sendEmailVerification(loggedUser)
                .then(result => {
                    console.log(result)
                    alert('please verify your email address')
            })
        }
    }
    return (
        <div>
            <h2>This is register form</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='your email' required /> <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='your password' required /> <br />
                <input type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;