import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Review from '../Review/Review';

const Reviews = ({ id, name }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const handleComment = event => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;

        const review = {
            serviceId: id,
            serviceName: name,
            userId: user?.uid,
            userName: user?.displayName,
            userImg: user?.photoURL,
            comment: text
        }
        form.reset();

        fetch('https://dream-travel-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch(`https://dream-travel-server.vercel.app/reviews?id=${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [id]);

    return (
        <div>
            <h2 className='text-2xl text-center mb-20 font-bold'>Reviews of this Service {reviews?.length}</h2>
            <div>
                {
                    reviews?.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
            <div className="hero">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleComment} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Comment:</span>
                            </label>
                            <input type="text" name='text' placeholder="write Comment" className="textarea textarea-primary" />
                        </div>

                        <div className="form-control mt-6">
                            {
                                user?.uid ?
                                    <input className="btn btn-primary" type="submit" value="Post" />
                                    :
                                    <>
                                        <input className="btn btn-primary" type="submit" value="Post" disabled />
                                        <h4 className='text-lg font-bold text-center my-5'>Please, <Link to='/login' className='text-orange-600 hover:text-violet-600 text-xl'>Login</Link> first to post comments.</h4>
                                    </>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Reviews;