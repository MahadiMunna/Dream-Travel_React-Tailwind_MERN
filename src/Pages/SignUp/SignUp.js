import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle'

const SignUp = () => {
    useTitle('Signup');
    const {createUser,updateUserInfo} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            handleUserInfo(name,img);
            navigate('/login');
            form.reset();
        })    
    }
    const handleUserInfo = (name, img) => {
        const userInfo = {
            displayName: name,
            photoURL: img
        }
        updateUserInfo(userInfo)
            .then(() => { })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="hero w-full my-20">
            <div className="card w-full max-w-xl shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold mt-4">Sign up now!</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='img' placeholder="Photo URL" className="input input-bordered" />
                    </div>
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
                        <input className="btn btn-primary" type="submit" value="Sign up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold hover:text-violet-600' to='/login'>Login</Link> now!</p>
            </div>
        </div>
    );
};

export default SignUp;