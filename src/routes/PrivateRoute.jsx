import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import LoadingAnimation from '../Components/Shared/LoadingAnimation';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <LoadingAnimation />
    }
    if(user) {
        return children;
    }
    return <Navigate to="/openroot/login" />

};

export default PrivateRoute;