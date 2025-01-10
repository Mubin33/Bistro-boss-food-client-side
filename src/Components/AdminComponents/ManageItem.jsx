import React from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { CiEdit } from "react-icons/ci";
import UseAxiosSecure from './../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItem = ({item,refetch, idx}) => {
  const axiosSecure = UseAxiosSecure()
  // console.log(item)

  const handleDelete=(id)=>{
    Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/menu/${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                refetch()
              }
            });
          }
        });
  }
    return (
        <tbody>
              {/* row 1 */}
              <tr>
                <th>{idx + 1}</th>
                <td>
                  <img className="mask mask-squircle h-12 w-12" src={item?.image} alt="" />
                </td>
                <td>{item?.name}</td>
                <td>{item?.price}$</td>
                <td>
                  <Link to={`/dashboard/updateitem/${item?._id}`}>
                  <button  className="bg-orange-500 text-white btn btn-sm">
                    <CiEdit  size={18} />{" "}
                  </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-sm">
                    <MdOutlineDeleteForever size={18} />{" "}
                  </button>
                </td>
              </tr>
            </tbody>
    );
};

export default ManageItem;