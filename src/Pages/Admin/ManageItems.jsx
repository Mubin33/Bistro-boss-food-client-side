import React from "react";
import UseMenu from "../../Hooks/UseMenu";
import Title from "../../Components/Title";
import ManageItem from "../../Components/AdminComponents/ManageItem";

const ManageItems = () => {
  const [menu,refetch, isPending] = UseMenu();
  return (
    <div className="md:w-9/12 pt-2 mx-auto">
      <Title title="Manage Items" subtitle="---Hurry Up!---" />
      {isPending ? <p>Server is update all data</p> :<div className="mt-3 bg-gray-100 rounded-lg">
        <div className="overflow-x-auto">
          <div className="flex items-center justify-evenly my-5 ">
            <h1 className="text-2xl font-semibold">
              Total Item{menu.length > 1 ? "s" : ""}:{menu.length}
            </h1>
            {/* <h1 className="text-2xl font-semibold">Total Price:{totalPrice}$</h1> */}
            <button className="btn bg-white">clear</button>
          </div>
          <table className="table">
            {/* head */}
            <thead className="bg-amber-400">
              <tr>
                <th>SI</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Action</th>
              </tr>
            </thead>
            {menu?.map((item, idx) => (
              <ManageItem key={item._id} refetch={refetch} idx={idx} item={item} />
            ))}
          </table>
        </div>
      </div>}
    </div>
  );
};

export default ManageItems;
