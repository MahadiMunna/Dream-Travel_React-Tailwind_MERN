import React from 'react';

const Review = ({ review }) => {
    const { userName, userImg, comment } = review;
    return (
        <div className="hero">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 flex flex-row mb-5">
                    <div className='mr-3'>
                    <img width="50" height="50" className="mask mask-squircle"  src={userImg} alt='' />
                    </div>
                    <div>
                        <h4 className='text-lg font-bold'>{userName}</h4>
                        <p>{comment}</p>
                    </div>
                </div>
            </div>
    );
};

export default Review;