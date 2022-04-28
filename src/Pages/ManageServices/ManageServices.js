import React from 'react';
import useServices from '../../hook/useServices';
import Services from '../Home/Services/Services';

const ManageServices = () => {
    const [services] = useServices();

    const handleDelete = id=>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){

        }
    }

    return (
        <div>
            <h2>ManageServices</h2>
            {/* <Services></Services> */}
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={()=>handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;