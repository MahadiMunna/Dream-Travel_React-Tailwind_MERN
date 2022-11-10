import React from 'react';
import img1 from '../../../assets/images/img2.jpg';
import sp1 from '../../../assets/sponsors/1.png';
import sp2 from '../../../assets/sponsors/2.png';
import sp3 from '../../../assets/sponsors/3.png';
import sp4 from '../../../assets/sponsors/4.png';
import sp5 from '../../../assets/sponsors/5.png';

const Sections = () => {
    return (
        // section 1
        <div className='mb-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2'>
                        <div className="avatar">
                            <div className="w-70 mask mask-squircle">
                                <img src={img1} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 ml-5'>
                        <h1 className="text-5xl font-bold mb-5">About Dream Travel!</h1>
                        <p className="py-6 text-xl">Dream Travel Providing you comprehensive travel opportunities of all kinds, of all forms, and for everyone and engaged in the development of the travel industry. It is run by a team of experience young energetic professionals fully conversant with modern day’s travel trends and its practices, having years of experience in airlines and travel agencies business.</p>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            
            <div className='text-center my-20'>
                <h1 className="text-5xl font-bold mb-5">Our Partners!</h1>
                <p className="py-6 text-xl">Dream travel is trusted by a lot of people.</p>
                <div className='grid grid-cols-5 sm:d-none justify-around items-center'>
                    <img src={sp1} width="150" height="150"  alt="" />
                    <img src={sp2} width="150" height="150"  alt="" />
                    <img src={sp3} width="150" height="150"  alt="" />
                    <img src={sp4} width="150" height="150"  alt="" />
                    <img src={sp5} width="150" height="150"  alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sections;