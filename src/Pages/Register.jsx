import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { useForm } from "react-hook-form";
import bg_image from "../assets/others/authentication.png";
import img from "../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../Components/SocialLogin";

const Register = () => {
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const { registerUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    registerUser(data?.email, data?.password)
      .then((result) => {
        console.log(result);
        updateUser(data?.name, data?.photo)
          .then(() => {
            // console.log(result)
            const userInfo = { name: data?.name, email: data?.email };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  title: "Wow!",
                  text: "Successfully joined.",
                  icon: "success",
                });
              }
            });
            reset();
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleSubmit=(e)=>{
  //     e.preventDefault()

  //     let form = e.target
  //     let name = form.name.value
  //     let email = form.email.value
  //     let password = form.password.value

  //     registerUser(email, password)
  //     .then((result)=>{
  //         console.log(result)
  //     }).catch((error)=>{
  //         console.log(error)
  //     })

  // }
  return (
    <>
      <Helmet>
        <title>Register | Bistro Boss</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${bg_image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="hero bg-base-200 min-h-screen"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl text-center font-bold">Register now!</h1>
            <img src={img} alt="" />
          </div>
          <div style={{
                backgroundImage: `url(${bg_image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }} className="card-body bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
            <form
              
              onSubmit={handleSubmit(onSubmit)}
              className=" "
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-[12px] text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="photo"
                  placeholder="photo"
                  {...register("photo", { required: true })}
                  name="photo"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-[12px] text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-[12px] text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^[A-Za-z]/i,
                  })}
                  name="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-[12px] text-red-600">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-[12px] text-red-600">
                    password must be 6 character{" "}
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-[12px] text-red-600">
                    Maximum 20 character set
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-[12px] text-red-600">
                    Add any uppercase and lowercase character
                  </p>
                )}
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Have already account
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign up"
                  name="sign-ip"
                />
              </div>
            </form>
              <div className="flex justify-center ">
                <SocialLogin />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
