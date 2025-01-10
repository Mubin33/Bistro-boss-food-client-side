import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const CartItem = ({ idx, item, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const { name, image, price, _id } = item;
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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
  };
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{idx + 1}</th>
        <td>
          <img className="mask mask-squircle h-12 w-12" src={image} alt="" />
        </td>
        <td>{name}</td>
        <td>{price}$</td>
        <td>
          <button onClick={() => handleDelete(_id)} className="btn btn-sm">
            <MdOutlineDeleteForever size={18} />{" "}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartItem;
