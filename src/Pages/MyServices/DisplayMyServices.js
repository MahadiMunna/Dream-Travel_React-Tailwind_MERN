import React from 'react';

const DisplayMyServices = ({service}) => {
    const { name, img, price} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-between items-center">
                    <div className='font-bold text-lg'>Price: {price}</div>
                </div>
            </div>
        </div>
    );
};

export default DisplayMyServices;