import React from 'react';
import img1 from '../../../assets/images/img2.jpg'

const Sections = () => {
    return (
        <div className='mb-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2'>
                        <div className="avatar">
                            <div className="w-70 mask mask-squircle">
                                <img src={img1} alt=''/>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 ml-5'>
                        <h1 className="text-5xl font-bold mb-5">About Dream Travel!</h1>
                        <p className="py-6 text-xl">Dream Travel Providing you comprehensive travel opportunities of all kinds, of all forms, and for everyone and engaged in the development of the travel industry. It is run by a team of experience young energetic professionals fully conversant with modern day’s travel trends and its practices, having years of experience in airlines and travel agencies business.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sections;