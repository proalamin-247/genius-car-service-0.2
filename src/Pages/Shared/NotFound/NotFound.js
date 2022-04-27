import React from 'react';
import sleeping from '../../../images/sleeping.webp'

const NotFound = () => {
    return (
        <div className=''>
            <h2 className='text-center bg-info'>Machanic is sleeping</h2>
            <img src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;