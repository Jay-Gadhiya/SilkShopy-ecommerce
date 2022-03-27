import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/context/authentication-context";
import { useNavigate } from "react-router";
import "./Navbar.css";
import { useCart } from "../../contexts/context/cart-context";
import { useWishList } from "../../contexts/context/wishlist-context";
import { toast } from 'react-toastify';

const Navbar = () => {

    const navigate = useNavigate();
    const { authState, authDispatch } = useAuth();
    const { cartState } = useCart();
    const { wishState } = useWishList();

     // user logout click handler
     const logoutClickHandler = (e) => {
        localStorage.removeItem("token");
        authDispatch({ type : "USER_LOGOUT"});
        navigate("/");

        toast.success("Log Out Successfully", {
            position: "bottom-center",
            autoClose: 1100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme : "colored"
        });

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
                        authState.token
                        ? <button onClick={logoutClickHandler} className="btn btn-login btn-primary"><Link className="active-link" to="/">Logout</Link></button>
                        : <button className="btn btn-login btn-primary"><Link className="active-link" to="/login">Login</Link></button>
                         
                    }
                    
        
                    <div className="nav-icons-item flex-center">
                        <span className="icon-shopy"><Link to="/wishlist"><i className="fas fa-heart"></i></Link></span>
                        <span className="below-text">Wishlist</span>
                        <span className="badge-on-icon badge-wish-position">{ wishState.itemsPresent }</span>
                    </div>
        
                    <div className="nav-icons-item flex-center">
                        <span className="icon-shopy">
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                        </span>
                        <span className="below-text">Cart</span>
                        <span className="badge-on-icon  badge-cart-position">{ cartState.cartProducts }</span>
                    </div>
                    </section>
                </div>
           </nav>
        </header>
    )
}

export {Navbar};