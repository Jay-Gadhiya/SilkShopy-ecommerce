import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/context/authentication-context";
import { useNavigate } from "react-router";
import "./Navbar.css";

const Navbar = () => {

    const navigate = useNavigate();
    const { authState, authDispatch } = useAuth();

     // user logout click handler
     const logoutClickHandler = (e) => {
        localStorage.removeItem("token");
        authDispatch({ type : "USER_LOGOUT"});
        navigate("/");
    }

    return (
        <header className="header-shopy shadow-box">
            <nav className="nav-shopy flex-center">
                <section className="brand-name"><Link to="/"><img className="silk-img" src="https://silkshopyy.netlify.app/images/silkshopy-name.jpeg" alt="silk-img"/></Link>
                </section>
    
                <div className="nav-items flex-center">
                    <section className="nav-input-box flex-center">
                    <button className="btn-input-box">
                        <i className="fas fa-search"></i>
                    </button>
                    <input className="input-shopy" type="text" placeholder="search" />
                    </section>
                    <section className="nav-icons flex-center">
                    {
                        authState.token === null
                        ? <button className="btn btn-login btn-primary"><Link className="active-link" to="/login">Login</Link></button>
                        : <button onClick={logoutClickHandler} className="btn btn-login btn-primary"><Link className="active-link" to="/">Logout</Link></button>
                    }
                    
        
                    <div className="nav-icons-item flex-center">
                        <span className="icon-shopy"><Link to="/wishlist"><i className="fas fa-heart"></i></Link></span>
                        <span className="below-text">Wishlist</span>
                    </div>
        
                    <div className="nav-icons-item flex-center">
                        <span className="icon-shopy">
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                        </span>
                        <span className="below-text">Cart</span>
                    </div>
                    </section>
                </div>
           </nav>
        </header>
    )
}

export {Navbar};