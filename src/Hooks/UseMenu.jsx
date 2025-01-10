// import React, { useEffect, useState } from 'react';

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseMenu = () => { 
    const axiosPublic = UseAxiosPublic()
    // const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data)
    //         setLoading(false)
    //     })
    // },[])
    const { refetch, isPending, data: menu=[] } = useQuery({
        queryKey: ['menu'],
        queryFn: async () =>{
            let res =await axiosPublic.get(`/menu`)
            return res.data
        }
        
      })
    return [menu,refetch, isPending];
};

export default UseMenu;
