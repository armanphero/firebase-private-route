import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthComponent = ({ children }) => {
    const [user, setUser] = useState(null);

    const registerNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const userInfo = {
        registerNewUser,
        signInUser,
        setUser,
        user
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })

    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthComponent;