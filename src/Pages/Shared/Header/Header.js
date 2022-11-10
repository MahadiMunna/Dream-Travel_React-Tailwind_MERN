import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import logo from '../../../assets/logo/dream-travel-logo.png'

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    
    const handleLogout= ()=>{
        
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    const navLinks = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/services'>Services</Link></li>
        <li className='font-bold'><Link to='/blogs'>Blogs</Link></li>
        {
            user?.uid?
                <>
                    <li className='font-bold'><Link to='/my-reviews'>My Reviews</Link></li>
                    <li className='font-bold'><Link to='/add-service'>Add Service</Link></li>
                    <li onClick={handleLogout} className='font-bold'><Link to='/login'>Logout</Link></li>
                </>
                :
                <li className='font-bold'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img src={logo} width="50" height="50"  alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold text-orange-600">Dream Travel</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;