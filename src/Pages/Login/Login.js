import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SocialLogin from './Social Login/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handaleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = (
                <p className='text-danger'>Error: {error?.message}</p>
        );
    }

    const navigateRagister = event => {
        navigate('/register')
    }

    // Initialize a boolean state
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    return (
        <div className='container w-25 mx-auto mt-5'>
            <h2 className='text-primary text-center'>Please Login...</h2>
            <PageTitle title='Login'></PageTitle>
            <button onClick={togglePassword}>Show Password</button>
            <Form onSubmit={handaleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type={passwordShown ? "text" : "password"}  placeholder="Password" require/>
                </Form.Group>
                <Link to='/forgetpassword' className='text-primary pe-auto text-decoration-none'>Forget Password</Link>
                
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary w-100 mt-3" type="submit">
                    Login
                </Button>
                <p className='mt-2'>Have not account? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRagister}>Please Register</Link></p>
            </Form>
            {errorElement}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;