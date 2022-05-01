import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useServiceDetails from '../../../hook/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';


const Checkout = () => {
    const {serviceId}= useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    console.log(user)
    // const [user, setUser] = useState({
    //     name: 'Akbar The Great',
    //     email: 'akbar@aaaa.traj',
    //     address: 'tkg ktg',
    //     phone: '65454545454'
    // })

    // const handaleAddressChange = event =>{
    //     console.log(event.target.value);
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address:newAddress, ...rest}
    //     setUser(newUser)
    // }

    const handlePlaceOrder = event=>{
        event.preventDefault();
        const order ={
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response=>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked! We will contact soon');
                event.target.reset();
                navigate('/home');
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Check out your booking:</h2>
            <h4>Order Item: {service.name}</h4>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='Name' required/>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='email' disabled required/>
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' disabled required/>
                <br />
                <input className='w-100 mb-2' type="text"  name='address'  placeholder='address' autoComplete='off' required/>
                <br />
                <input className='w-100 mb-2' type="text"  name='phone' placeholder='phone' required/>
                <br />
                <input type="submit" value="Place order" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;