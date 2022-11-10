import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    useTitle('Details');
    const {_id, img, name, details, price } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleAddService = () => {
        const myService = {
            userId : user?.uid,
            id:_id,
            img:img,
            name:name,
            price:price           
        }
  
        fetch('http://localhost:5000/my-services',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(myService)
        })       
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
        })
        .catch(error=>console.log(error))
    }

    
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 my-20'>
            <div className='col-span'>
                <img className='shadow-lg rounded' src={img} alt="" />
                <h2 className='mt-5 font-bold text-2xl text-center'>{name}</h2>
                <p className='text-lg mt-5'>{details}</p>
                <div className="card-actions justify-between items-center my-10">
                    <div className='font-bold text-lg'>Price: {price}</div>
                    <div onClick={handleAddService} className="badge badge-error text-lg font-bold hover:badge-outline"><Link>Add Service</Link></div>
                </div>
            </div>
            <div>
                <Reviews key={_id} id={_id} name={name}></Reviews>
            </div>
        </div>
    );
};

export default ServiceDetails;