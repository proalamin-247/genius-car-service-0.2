import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
    const emailRef = useRef('');
    let errorElement;

    const handaleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
    }

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    if (error) {
        errorElement = (
            <p className='text-danger'>Error: {error?.message}</p>
        );
    }
    if (sending) {
        return <Loading></Loading>;
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast("rest password email send")
    }

    return (
        <div className='container p-5 w-25 mx-auto mt-5 '>
            <h2>Forget Password</h2>
            <form onSubmit={handaleSubmit} className='mt-2'>
                <div className="mb-3">
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    <div id="emailHelp" className="form-text">type your account email, which you use create tyour account</div>
                </div>
                {errorElement}
                <button onClick={resetPassword} type="submit" className="btn btn-primary">Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ForgetPassword;