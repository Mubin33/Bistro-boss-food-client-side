import React from "react";
import useCart from "./../Hooks/useCart";
import CartItem from "../Components/DashboardComponents/CartItem";
import Title from "./../Components/Title";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, current)=>{
    return total+current.price
  },0)
  return (
    <div className="md:w-9/12 pt-2 mx-auto">
      <Title title="MANAGE ALL ITEMS" subtitle="---Hurry Up!---" />
      <div className="mt-3 bg-gray-100 rounded-lg">
        <div className="overflow-x-auto">
            <div className="flex items-center justify-evenly my-5 ">
                <h1 className="text-2xl font-semibold">Total Item{cart.length > 1? "s":""}:{cart.length}</h1>
                <h1 className="text-2xl font-semibold">Total Price:{totalPrice}$</h1>
                {cart.length >0 ?<Link to="/dashboard/reservation">
                <button className="btn bg-white">Pay</button>
                </Link> :<button disabled className="btn  bg-white">Pay</button>}
                
            </div>
          <table className="table">
            {/* head */}
            <thead className="bg-amber-400">
              <tr>
                <th>SI</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {cart?.map((item, idx) => (
              <CartItem key={item._id} refetch={refetch} idx={idx} item={item} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
