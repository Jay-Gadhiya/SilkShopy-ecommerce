import "./Authentication.css";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <section className="auth-container">
            <header className="heading-box flex-center">
                <h2 className="auth-heading login-heading">Login</h2>
            </header>
    
            <div className="input-container flex margin-bottom width-100">
                <label htmlFor="email" className="auth-label">Email address</label>
                <input className="auth-input" type="email" placeholder="Type email" />
            </div>
    
            <div className="input-container flex margin-bottom width-100">
            <label htmlFor="password" className="auth-label">Password</label>
            <input className="auth-input" type="password" placeholder="Type password" />
            </div>
    
            <div className="condition-box flex width-100 margin-bottom">
                <div className="remember-me-box">
                    <input type="checkbox" name="remember me" id="remember-me" />
                    <label htmlFor="remember me">Remember me</label>
                </div>
    
                <div className="forgot-pass-box ">
                    <a href="#" className="forgot-pass-link">Forgot your password?</a>
                </div>
            </div>
    
            <div className="auth-btn width-100">
                <button className="btn btn-primary"><a href="/Product-Listing/product.html" className="active-link">Login</a></button>
            </div>
    
            <div className="auth-btn width-100">
                <button className="btn btn-secondary-link"><Link to="/signup">Create New Account</Link></button>.
            </div>
        </section>
    )
}

export {Login};