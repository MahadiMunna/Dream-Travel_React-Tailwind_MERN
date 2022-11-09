import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {name} = useLoaderData();
    console.log(name);
    return (
        <div>
            
        </div>
    );
};

export default ServiceDetails;