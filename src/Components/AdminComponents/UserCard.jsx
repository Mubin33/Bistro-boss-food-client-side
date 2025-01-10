import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { FaUserCog } from "react-icons/fa";

const UserCard = ({ idx, item, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const { name, email, _id } = item;
  const handleDelete = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleRole = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}`).then((res) => {
          console.log(res);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Update!",
              text: `${user.name} is Admin now`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{idx + 1}</th>
        <td>
          <p>{email}</p>
        </td>
        <td>{name}</td>
        <td>
          {item.role ? (
            "Admin"
          ) : (
            <button onClick={() => handleRole(item)} className="btn btn-sm">
              <FaUserCog size={18} />{" "}
            </button>
          )}
        </td>
        <td>
          <button onClick={() => handleDelete(_id)} className="btn btn-sm">
            <MdOutlineDeleteForever size={18} />{" "}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserCard;
