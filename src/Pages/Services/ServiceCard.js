import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, name, details, img, price } = service;

    //slicing details
    let shortDetails = '';
    if (details.length > 100) {
        const text = details.slice(0, 100);
        shortDetails = text;
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><PhotoProvider>
                <div className="foo">
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{shortDetails}...</p>
                <div className="card-actions justify-between items-center">
                    <div className='font-bold text-lg'>Price: {price}</div>
                    <div className="badge badge-error text-lg font-bold hover:badge-outline"><Link to={`/service-details/${_id}`}>View</Link></div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;