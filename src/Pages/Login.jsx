import { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Components/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg_image from "../assets/others/authentication.png";
import img from "../assets/others/authentication2.png";
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../Components/SocialLogin';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    let captchaRef = useRef(null);
    const location = useLocation()
    const navigate = useNavigate() 

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        let user_captcha_value = form.captcha.value;

        if (validateCaptcha(user_captcha_value)) {
            loginUser(email, password)
                .then((result) => {
                    console.log(result);
                    navigate(location?.state?.from?.pathname || "/")
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            alert("Captcha does not match. Please try again.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Login | Bistro Boss</title>
            </Helmet>
            <div
                style={{
                    backgroundImage: `url(${bg_image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
                className="hero bg-base-200 min-h-screen"
            >
                <div className="hero-content flex">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        <img src={img} alt="" />
                    </div>
                    <div style={{
                                backgroundImage: `url(${bg_image})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }} className="card-body bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                        <form
                           
                            onSubmit={handleSubmit}
                            className=" "
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <Link to="/register" className="label-text-alt link link-hover">
                                        Create a new account
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    ref={captchaRef}
                                    type="text"
                                    placeholder="Enter captcha"
                                    name="captcha"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" name="login" />
                            </div>
                        </form>
                        <div className='flex justify-center '>
                        <SocialLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
