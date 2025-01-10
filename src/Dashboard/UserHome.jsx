import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider';

const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1 className="text-3xl">Hi, {user? user.displayName : "User"}</h1> 
        </div>
    );
};

export default UserHome;