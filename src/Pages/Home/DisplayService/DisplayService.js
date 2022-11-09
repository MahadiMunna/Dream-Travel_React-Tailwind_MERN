import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard';

const DisplayService = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    console.log(services)

    return (
        <div className='my-10'>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    
                    services.slice(0,3).map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                    
                }
            </div>
            <div className='text-center mt-10'>
                <button className="btn btn-outline btn-error"><Link to='/services'>View All</Link></button>
            </div>
        </div>
        
    );
};

export default DisplayService;