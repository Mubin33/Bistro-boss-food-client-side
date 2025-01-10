import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetAdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin,isPending] = UseAdmin()
    const location = useLocation()

     if(loading || isPending){
        return <p>loading..!!</p>
    }

    if(user && isAdmin){
        return children
    } 
    return (
        <Navigate to="/" state={{from: location}} replace></Navigate>
    );
};

export default PrivetAdminRoute;