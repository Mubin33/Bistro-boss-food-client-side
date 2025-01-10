
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaCartArrowDown } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineManageSearch } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";  
import UseAdmin from "../Hooks/UseAdmin";


const Dashboard = () => { 
  const location = useLocation(); 
  const [isAdmin] = UseAdmin()
 

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-200">
        <div className="w-52 my-12 mx-auto">
          <h1 className="text-center text-3xl font-semibold">Bistro Boss</h1>
          <p className="text-center text-sm ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <ul className="p-4 space-y-3">
          {isAdmin ? (
            <>
              {/* Admin visite */}
              <li
                className={`text-xl font-semibold  cursor-pointer p-2 ${
                  location.pathname === "/dashboard/adminhome"
                    ? "text-white bg-black rounded-md"
                    : ""
                }`}
              >
                <NavLink
                  className="flex gap-2 items-center"
                  to="/dashboard/adminhome"
                >
                  <IoMdHome />
                  Admin Home
                </NavLink>
              </li>{" "}
              <li
                className={`text-xl font-semibold  cursor-pointer p-2 ${
                  location.pathname === "/dashboard/additems"
                    ? "text-white bg-black rounded-md"
                    : ""
                }`}
              >
                <NavLink
                  className="flex gap-2 items-center"
                  to="/dashboard/additems"
                >
                  <IoMdAddCircle />
                  Add Items
                </NavLink>
              </li>
              <li
                className={`text-xl font-semibold  cursor-pointer p-2 ${
                  location.pathname === "/dashboard/manageitems"
                    ? "text-white bg-black rounded-md"
                    : ""
                }`}
              >
                <NavLink
                  className="flex gap-2 items-center"
                  to="/dashboard/manageitems"
                >
                  <MdOutlineManageSearch />
                  Manage Items
                </NavLink>
              </li>
              <li
                className={`text-xl font-semibold  cursor-pointer p-2 ${
                  location.pathname === "/dashboard/managebookings"
                    ? "text-white bg-black rounded-md"
                    : ""
                }`}
              >
                <NavLink
                  className="flex gap-2 items-center"
                  to="/dashboard/managebookings"
                >
                  <CiBookmarkCheck />
                  Manage Bookings
                </NavLink>
              </li>
              <li
                className={`text-xl font-semibold  cursor-pointer p-2 ${
                  location.pathname === "/dashboard/allusers"
                    ? "text-white bg-black rounded-md"
                    : ""
                }`}
              >
                <NavLink
                  className="flex gap-2 items-center"
                  to="/dashboard/allusers"
                >
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* normal user visit */}
              <li
                className={`text-xl font-semibold  cursor-pointer p-2 ${
                  location.pathname === "/dashboard/userhome"
                    ? "text-white  bg-black rounded-md"
                    : ""
                }`}
              >
                <NavLink
                  className="flex gap-2 items-center"
                  to="/dashboard/userhome"
                >
                  <IoIosHome />
                  User Home
                </NavLink>
              </li>
              <li
                className={`text-xl font-semibold  cursor-pointer p-2 ${
                  location.pathname === "/dashboard/reservation"
                    ? "text-white  bg-black rounded-md"
                    : ""
                }`}
              >
                <NavLink
                  className="flex gap-2 items-center"
                  to="/dashboard/reservation"
                >
                  <SlCalender />
                  Reservation
                </NavLink>
              </li>
              <li
                className={`text-xl font-semibold  cursor-pointer p-2 ${
                  location.pathname === "/dashboard/cart"
                    ? "text-white bg-black rounded-md"
                    : ""
                }`}
              >
                <NavLink
                  className="flex gap-2 items-center"
                  to="/dashboard/cart"
                >
                  <FaCartArrowDown />
                  My Cart
                </NavLink>
              </li>
              <li
                className={`text-xl font-semibold  cursor-pointer p-2 ${
                  location.pathname === "/dashboard/review"
                    ? "text-white bg-black rounded-md"
                    : ""
                }`}
              >
                <NavLink
                  className="flex gap-2 items-center"
                  to="/dashboard/review"
                >
                  <GoCodeReview />
                  Add review
                </NavLink>
              </li>
              <li
                className={`text-xl font-semibold  cursor-pointer p-2 ${
                  location.pathname === "/dashboard/mybookings"
                    ? "text-white bg-black rounded-md"
                    : ""
                }`}
              >
                <NavLink
                  className="flex gap-2 items-center"
                  to="/dashboard/mybookings"
                >
                  <TbBrandBooking />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}

          {/* common site all user visit */}
          <div className="divider"></div>
          <li className={`text-xl font-semibold  cursor-pointer p-2 `}>
            <NavLink className="flex gap-2 items-center" to="/">
              <IoMdHome />
              Home
            </NavLink>
          </li>
          <li className={`text-xl font-semibold  cursor-pointer p-2 `}>
            <NavLink className="flex gap-2 items-center" to="/menu">
              <MdOutlineMenuBook />
              Menu
            </NavLink>
          </li>
          <li className={`text-xl font-semibold  cursor-pointer p-2 `}>
            <NavLink className="flex gap-2 items-center" to="/order">
              <MdBorderColor />
              Order
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
