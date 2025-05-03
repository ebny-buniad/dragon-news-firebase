import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/Spinner';

const PrivateRouter = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <Spinner></Spinner>
    }
    // If has user return children, else navigate to login page

    if (user && user?.email) {
        return children
    } else {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }

};

export default PrivateRouter;