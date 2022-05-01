import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hook/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId} = useParams();
    const [service] = useServiceDetails(serviceId);
    
    return (
        <div>
            <h2>You are about to service deatils: {serviceId}</h2>
            <div>
                Name: {service.name}
            </div>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;