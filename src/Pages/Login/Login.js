import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const {signIn, providerLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname||'/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result=>{
            const user = result.user;
            navigate(from, {replace: true});
            form.reset();
        })
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            navigate(from, {replace: true});
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero w-full my-20">
            <div className="card w-full max-w-xl shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold mt-4">Login now!</h1>
                <form onSubmit={handleLogin} className="card-body">
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
                <div>
                    <p className='text-center mb-10'>Don't you have an account? <Link className='text-orange-600 font-bold hover:text-violet-600' to='/signup'>Sign up</Link> now!</p>
                    <p className='text-center'><button onClick={handleGoogleSignIn} className="btn btn-wide mx-5">Login with Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;