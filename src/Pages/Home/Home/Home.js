import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import DisplayService from '../DisplayService/DisplayService';

const Home = () => {
    useTitle('Home');
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <DisplayService></DisplayService>
        </div>
    );
};

export default Home;