import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthComponent';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // console.log(children);
    const { user, isLoading } = useContext(AuthContext);
    if (user) {
        return children;
    }
    else if (isLoading) {
        return <>
            <div className='container mx-auto'>
                <progress className="progress w-56"></progress>
            </div>
        </>
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;