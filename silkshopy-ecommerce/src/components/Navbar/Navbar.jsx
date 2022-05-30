import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/context/authentication-context";
import { useNavigate } from "react-router";
import { FaUser } from 'react-icons/fa';
import "./Navbar.css";
import { useCart } from "../../contexts/context/cart-context";
import { useWishList } from "../../contexts/context/wishlist-context";
import { toast } from 'react-toastify';
import { useFilter } from "../../contexts/context/filter-context";

const Navbar = () => {

    const navigate = useNavigate();
    const { authState, authDispatch } = useAuth();
    const { cartState } = useCart();
    const { wishState } = useWishList();
    const { state ,dispatch } = useFilter();

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

    // search products
    const searchProducts = (e) => {
        dispatch({ type : "SEARCH_PRODUCTS", payload : (e.target.value).toLowerCase() });
        dispatch({ type: "CLEAR" });
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
                    <input 
                    className="input-shopy" 
                    type="text" 
                    placeholder="Search Products Name"
                    value={ state.searchedProducts }
                    onChange={ searchProducts }

                     />
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
                        {
                            wishState.itemsPresent > 0
                            &&
                            <span className="badge-on-icon badge-wish-position">{ wishState.itemsPresent }</span>
                        }
                    </div>
        
                    <div className="nav-icons-item flex-center">
                        <span className="icon-shopy">
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                        </span>
                        <span className="below-text">Cart</span>
                        {
                            cartState.cartProducts > 0
                            &&
                            <span className="badge-on-icon  badge-cart-position">{ cartState.cartProducts }</span>

                        }
                    </div>

                    <div className="nav-icons-item flex-center">
                        <span className="icon-shopy icon-profile">
                        <Link to="/profile/"><FaUser /></Link>
                        </span>
                        <span className="below-text profile-nav">Profile</span>
                    </div>
                    </section>
                </div>
           </nav>
        </header>
    )
}

export {Navbar};