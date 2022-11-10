import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services');
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    
    return (
        <div className='mb-10'>
            <h1 className='text-center text-orange-600 text-3xl font-bold my-10'>Checkout our packages and offers from Here</h1>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                    
                }
            </div>
        </div>
        
    );
};

export default Services;