// import React from 'react';
import React, { useState, useEffect } from 'react';


export default function Footer() {
    // dynamicly show year 

    // method 1
    // const [date, setDate] = useState();
    // const getYear = () => setDate(new Date().getFullYear())
    // useEffect(() => {
    //     getYear();
    // }, [])

    // method 2
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5 mb-2'>
            &copy; {year} Genius Car Services. All rights reserved.
        </div>
    );
}