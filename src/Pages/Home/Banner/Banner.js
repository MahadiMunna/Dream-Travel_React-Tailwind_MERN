import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/pKw1ZMn/cover22.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Dream Travel</h1>
                    <p className="mb-5 text-xl">Are you looking for travel guide? Want to visit places with reasonable cost? We are offering everything you need for travel.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;