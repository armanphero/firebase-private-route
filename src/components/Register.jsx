import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
import { AuthContext } from './AuthComponent';

const auth = getAuth(app);

const Register = () => {
    const {registerNewUser} = useContext(AuthContext);

    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleRegistration = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name);
        console.log(email);
        console.log(password);
        registerNewUser(email, password)
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
                    <h1 className="text-3xl md:text-5xl font-bold">Please Register!</h1>
                </div>
                <div className="card w-[340px] md:w-[450px] lg:w-[500px] shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistration} className="card-body" ref={formRef}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" ref={nameRef} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" ref={emailRef} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" ref={passwordRef} required />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account? Login here</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;