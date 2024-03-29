import { useState } from "react";
import { Link } from "react-router-dom";
import "./Authentication.css";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";
import { useAuth } from "../../contexts/context/authentication-context";
import { toast } from 'react-toastify';


const Signup = () => {

    const [userData, setUserData] = useState({  firstName : "", lastName : "", email : "", password : "" });
    const navigate = useNavigate();
    const { authDispatch } = useAuth();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    // user inputs
    const userInputValues = (e) => {
        setUserData((pre) => ({...pre, [e.target.name] : e.target.value }));
    }

    // post data of user
    const signupHandler = async (e) => {
        e.preventDefault();

        try {  
          const response = await axios.post(`/api/auth/signup`, {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
          });

          localStorage.setItem("token", response.data.encodedToken);
          navigate(from, { replace: true });
          authDispatch({ type : "USER_SIGNUP", payload : response.data.encodedToken });

          toast.success("Sign Up Successfully", {
            position: "top-center",
            autoClose: 1100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme : "colored"
            });

        } catch (error) {
            toast.error("Sign Up failed", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme : "colored"
                });
        }
    };
    

    return (
        <form onSubmit={signupHandler} className="auth-container">
            <header className="heading-box flex-center">
                <h2 className="auth-heading">Signup</h2>
            </header>

            <div className="input-container auth-name-input-cont flex margin-bottom width-100">

                <div className="auth-name-box flex auth-name-input">
                    <label htmlFor="email" className="auth-label">First Name</label>
                    <input onChange={userInputValues} name="firstName" className="auth-input" type="text" placeholder="Type first name" required />
                </div>

                <div className="auth-name-box auth-name-input flex">
                    <label htmlFor="email" className="auth-label">Last Name</label>
                    <input onChange={userInputValues}  name="lastName" className="auth-input last-name" type="text" placeholder="Type last name" required />
                </div>
                
            </div>
    
            <div className="input-container flex margin-bottom width-100">
                <label htmlFor="email" className="auth-label">Email address</label>
                <input onChange={userInputValues} name="email" className="auth-input" type="email" placeholder="Type email" required />
            </div>
    
            <div className="input-container flex margin-bottom width-100">
                <label htmlFor="password" className="auth-label">Password</label>
                <input onChange={userInputValues}   name="password" className="auth-input" type="password" placeholder="Type password" required />
            </div>
    
            <div className="condition-box flex width-100 margin-bottom">
                <div className="remember-me-box">
                    <input type="checkbox" name="remember me" id="remember-me" required />
                    <label htmlFor="remember me">I accept all Tearms and Conditions</label>
                </div>

            </div>
    
            <div className="auth-btn width-100">
                <button  className="btn btn-primary">Create New Account</button>
            </div>
    
            <div className="auth-btn width-100">
                <button className="btn btn-secondary-link"><Link to="/login">Already have an account</Link></button>
            </div>
        </form>
    )
}

export {Signup};