import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthComponent';

const Header = () => {
    const {user} = useContext(AuthContext);
    // const user = handleSignInUserState();
    console.log(user);
    return (
        <nav className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/' className='font-semibold'>Home</Link>
                            </li>
                            <li>
                                <Link to='/login' className='font-semibold'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register' className='font-semibold'>Register</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className='text-xl font-semibold text-blue-500'>MyApp</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/' className='font-semibold'>Home</Link>
                        </li>
                        <li>
                            <Link to='/login' className='font-semibold'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register' className='font-semibold'>Register</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && 
                        <div>
                            <p>{user.email}</p>
                        </div>
                    }
                    <a className="btn">Button</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;