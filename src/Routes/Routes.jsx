import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Menu from "../Pages/Menu";
import Orders from "../Pages/Orders";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRoute from "../Components/PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Dashboard/Cart";
import UserHome from "../Dashboard/UserHome";
import Reservation from "../Dashboard/Reservation";
import Review from "../Dashboard/Review";
import MyBookings from "../Dashboard/MyBookings";
import AdminHome from './../Pages/Admin/AdminHome';
import AddItems from './../Pages/Admin/AddItems';
import ManageItems from './../Pages/Admin/ManageItems';
import ManageBookings from './../Pages/Admin/ManageBookings';
import AllUsers from './../Pages/Admin/AllUsers';
import PrivetAdminRoute from "../Components/PrivetAdminRoute";
import UpdateItem from "../Components/AdminComponents/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard />{" "}
      </PrivetRoute>
    ),
    children: [
      // admin
      {
        path: "adminhome",
        element:<PrivetAdminRoute> <AdminHome /></PrivetAdminRoute>,
      },
      {
        path: "addItems",
        element:<PrivetAdminRoute> <AddItems /></PrivetAdminRoute>,
      },
      {
        path: "manageitems",
        element:<PrivetAdminRoute> <ManageItems /> </PrivetAdminRoute>,
      },
      {
        path: "updateitem/:id",
        element:<PrivetAdminRoute> <UpdateItem /> </PrivetAdminRoute>,
        loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: "managebookings",
        element: <PrivetAdminRoute><ManageBookings /> </PrivetAdminRoute> ,
      },
      {
        path: "allusers",
        element:<PrivetAdminRoute>  <AllUsers /></PrivetAdminRoute>,
      },
      // user
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "mybookings",
        element: <MyBookings />,
      },
    ],
  },
]);
