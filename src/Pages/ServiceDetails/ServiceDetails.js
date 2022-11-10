import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const {_id, img, name, details, price } = useLoaderData();
    console.log(name,img,details,price);
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 my-20'>
            <div className='col-span'>
                <img className='shadow-lg rounded' src={img} alt="" />
                <h2 className='mt-5 font-bold text-2xl text-center'>{name}</h2>
                <p className='text-lg mt-5'>{details}</p>
                <div className="card-actions justify-between items-center my-10">
                    <div className='font-bold text-lg'>Price: {price}</div>
                    <div className="badge badge-error text-lg font-bold hover:badge-outline"><Link to={`/service-details/${_id}`}>Add Service</Link></div>
                </div>
            </div>
            <div className=''>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default ServiceDetails;