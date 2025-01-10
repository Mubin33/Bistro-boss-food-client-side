import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import useCart from "../Hooks/useCart";
import UseAdmin from "../Hooks/UseAdmin";

const Navbar = () => {
  let { user, logoutUser, loading } = useContext(AuthContext);
  console.log(user);
  const [isAdmin] = UseAdmin();
  const [cart] = useCart();

  const logoutPerson = () => {
    logoutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let navbar = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order">Orders</NavLink>
      </li>
      {user ? (
        <li onClick={logoutPerson} className="btn btn-sm">
          Logout
        </li>
      ) : (
        <li className="btn btn-sm">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-50 max-w-screen-xl mx-auto text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-opacity-70 bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navbar}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>

        <div className=" navbar-end ">
          <div className="  hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navbar}</ul>
          </div>

          {user ? (
            isAdmin ? (
              <NavLink to="/dashboard/allusers">
                <ul className="menu menu-horizontal px-1">
                  <li>Dashboard</li>
                </ul>
              </NavLink>
            ) : (
              <NavLink to="/dashboard/cart">
                <div className="flex-none">
                  <div className="dropdown ">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle"
                    >
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="badge badge-sm indicator-item">
                          {cart.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            )
          ) : (
            <></>
          )}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
