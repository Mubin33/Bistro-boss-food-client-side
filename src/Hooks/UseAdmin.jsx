import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
  const { user ,loading } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const { data: isAdmin = [], isPending } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res?.data?.admin;
    },
  });
  return [isAdmin,isPending];
};

export default UseAdmin;
