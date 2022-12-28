import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingAnimation from '../Components/Shared/LoadingAnimation';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <LoadingAnimation />
    }
    if(user) {
        return children;
    }
    return <Navigate to="/openroot/login" state={{from: location}} replace />

};

export default PrivateRoute;