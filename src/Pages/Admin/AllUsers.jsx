import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UserCard from "../../Components/AdminComponents/UserCard";
import Title from "../../Components/Title";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();

  const { isPending, error, data:users=[],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async() => {
       const res =await axiosSecure.get("/users") 
       return res.data
    }
    });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(users);
  return (
    <div className="md:w-9/12 pt-2 mx-auto">
      <Title title="MANAGE ALL ITEMS" subtitle="---Hurry Up!---" />
      <div className="mt-3 bg-gray-100 rounded-lg">
        <div className="overflow-x-auto">
          <div className="flex items-center justify-evenly my-5 ">
            <h1 className="text-2xl font-semibold">
              Total Item{users.length > 1 ? "s" : ""}:{users.length}
            </h1>
            <button className="btn bg-white">clear</button>
          </div>
          <table className="table"> 
            <thead className="bg-amber-400">
              <tr>
                <th>SI</th>
                <th>Email</th>
                <th>Name</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            {users?.map((item, idx) => (
              <UserCard
                key={item._id}
                refetch={refetch}
                idx={idx}
                item={item}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
