import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    useTitle('Login');
    return (
        <div className="hero w-full my-20">
            <div className="card w-full max-w-xl shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold mt-4">Login now!</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>Don't you have an account? <Link className='text-orange-600 font-bold hover:text-violet-600' to='/signup'>Sign up</Link> now!</p>
            </div>
        </div>
    );
};

export default Login;