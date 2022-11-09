import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import DisplayService from '../DisplayService/DisplayService';
import Sections from '../Sections/Sections';

const Home = () => {
    useTitle('Home');
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <DisplayService></DisplayService>
            <Sections></Sections>
        </div>
    );
};

export default Home;