import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import DisplayMyReviews from './DisplayMyReviews';

const MyReviews = () => {
    useTitle('My Reviews');
    const { user } = useContext(AuthContext);
    const userId = user?.uid;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://dream-travel-server.vercel.app/my-reviews?userId=${userId}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [userId]);

    if (reviews.length === 0) {
        return <h1 className='text-center text-orange-600 text-3xl font-bold my-10 my-60'>You still don't post any Review.</h1>
    }
    return (
        <div className='mb-48'>
            <div>
                <h1 className='text-center text-orange-600 text-3xl font-bold my-10'>You have posted {reviews.length} reviews</h1>
            </div>
            <div>
                <div>
                    {
                        reviews?.map(review => <DisplayMyReviews key={review._id} review={review}></DisplayMyReviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;