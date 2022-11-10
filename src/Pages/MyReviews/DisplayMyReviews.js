import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayMyReviews = ({ review }) => {
    const { userName, userImg, comment, serviceName } = review;
    const notify = () => toast("Delete successfully!");
    return (
        <div className="hero">

            <div className="card w-full max-w-xl shadow-2xl bg-base-100 flex flex-row mb-5">
                <div className='mr-3'>
                    <img width="50" height="50" className="mask mask-squircle" src={userImg} alt='' />
                </div>
                <div>
                    <h4 className='text-lg font-bold'>{userName}</h4>
                    <p>{comment}</p>
                    <p><span className='font-bold'>Service name:</span> {serviceName}</p>
                    <div className='grid grid-cols-2 justify-around items-center my-3'>
                        <div className="badge badge-error text-lg font-bold hover:badge-outline"><Link>Edit</Link></div>
                        <div onClick={notify} className="badge badge-error text-lg font-bold hover:badge-outline"><Link>Delete</Link></div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DisplayMyReviews;