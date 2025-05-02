import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                console.log('User Not found!')
            }
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = {
        createUser,
        setUser,
        user,
    }

    console.log(user)

    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;