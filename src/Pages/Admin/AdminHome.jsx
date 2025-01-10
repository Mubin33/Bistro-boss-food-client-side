import React, { useContext } from 'react';
import { AuthContext } from './../../Components/AuthProvider';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const axiosSecure = UseAxiosSecure()

    const { data, isPending } = useQuery({
        queryKey: ["data"], 
        queryFn: async () => {
          const res = await axiosSecure.get(`/admin-stats`);
          return res.data;
        },
    });
    
    console.log(data) ;

    return (
        <div>
            <h1 className="text-3xl">Hi, {user? user?.displayName : "Admin"} </h1>
            <div className='grid md:grid-cols-4 gap-8 px-20 mt-20'>
                <div className='bg-orange-500 flex items-center rounded-2xl  justify-center  h-32 '>
                    <h1 className='text-white text-3xl font-semibold'>Menu: {data?.menu}</h1>
                </div>
                <div className='bg-blue-500  flex items-center  rounded-2xl justify-center -32 '>
                    <h1 className='text-white text-3xl font-semibold'>User: {data?.users}</h1>
                </div>
                <div className='bg-green-500 flex items-center  rounded-2xl justify-center h-32 '>
                    <h1 className='text-white text-3xl font-semibold'>Payment:  </h1>
                </div>
                <div className='bg-pink-500  flex items-center  rounded-2xl justify-center -32 '>
                    <h1 className='text-white text-3xl font-semibold'>Orders:  </h1>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;