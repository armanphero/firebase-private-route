import React, { useContext, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthComponent';
import { onAuthStateChanged } from 'firebase/auth';

const Login = () => {
    const { signInUser, setUser, user } = useContext(AuthContext);

    const formRef = useRef();
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = formRef.current;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email);
        console.log(password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero min-h-[calc(100vh-68px)] bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card w-[340px] md:w-[450px] lg:w-[500px] shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignIn} ref={formRef}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <button className="label-text-alt link link-hover">Forgot password?</button>
                            </label><label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">New to this app? Register here</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;