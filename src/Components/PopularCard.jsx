import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import useCart from "../Hooks/useCart";
import { MdOutlineDeleteForever } from "react-icons/md";

const PopularCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = useCart();

  const { _id, name, image, recipe, price } = item;

  const handleCart = (from) => {
    // console.log(from);
    if (user) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        recipe,
        price,
      };
      // console.log(cartItem);
      axiosSecure.post("http://localhost:5000/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert("successFully added");
          refetch();
        }
      });
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div>
      <div className="card card-compact bg-base-100  h-full shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="  text-center text-xl font-semibold">{name}</h2>
          <p className="text-center text-xs text-gray-500 "> {recipe}</p>
            {location.pathname === "/cart" ? (
              <button className="btn   btn-sm rounded-full">
                <MdOutlineDeleteForever size={24}/>
              </button>
            ) : (
              <div className="card-actions justify-center">
              <button
                onClick={() => handleCart(item)}
                className="btn btn-sm mt-5 border-b-2 border-b-[#cc9c2b]"
              >
                Add to Cart
              </button>
          </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
