import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import DisplayMyServices from './DisplayMyServices';

const MyServices = () => {
    useTitle("Add services");
    const {user} = useContext(AuthContext);
    const [services,setServices] = useState([]);
    const id = user?.uid;

    useEffect(()=>{
        fetch(`http://localhost:5000/my-services?id=${id}`)
        .then(res=>res.json())
        .then(data => setServices(data))
    },[id]);
    return (
        <div className='mb-10'>
            <h1 className='text-center text-orange-600 text-3xl font-bold my-10'>Checkout our packages and offers from Here</h1>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    
                    services?.map(service=><DisplayMyServices key={service._id} service={service}></DisplayMyServices>)
                    
                }
            </div>
        </div>
    );
};

export default MyServices;