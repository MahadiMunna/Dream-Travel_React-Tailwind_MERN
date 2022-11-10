import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Reviews = () => {
    useTitle('Review');
    const handleComment = event => {
        event.preventDefault();
        const text = event.target.text.value;
        console.log(text);
    }
    return (
        <div>
            <h2 className='text-2xl text-center mb-20 font-bold'>Reviews of this Service</h2>
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
                        <input className="btn btn-primary" type="submit" value="Post" />
                    </div>
                </form>
                </div>
            </div>
        </div>

    );
};

export default Reviews;