import React from "react";
import Title from "../Components/Title";
import { FaCreditCard } from "react-icons/fa";

const Reservation = () => {
  return (
    <div>
      <Title title="Payment" subtitle={"---set the card number---"} />
      <form>
        <div className="md:grid grid-cols-2 md:w-4/6 gap-16 mx-auto">
          <div className="relative w-full">
            {/* Icon */}
            <FaCreditCard className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />

            {/* Input */}
            <input
              type="text"
              className="input input-bordered pl-10 w-full"
              placeholder="Card Number"
            />
          </div>{" "}
          <input
            type="text"
            className="input input-bordered"
            placeholder="MM/YY/CVC"
          />
        </div>
        <div className="md:w-3/5 mt-5 mx-auto">
        <button className="btn w-full bg-purple-800 text-white"></button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
