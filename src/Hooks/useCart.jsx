import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";

 
const useCart = () => {
    const axiosSecure = UseAxiosSecure()
    const {user} = useContext(AuthContext)
    const { refetch, data: cart=[] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            let res =await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
        
      })
     return [cart,refetch]
};

export default useCart;