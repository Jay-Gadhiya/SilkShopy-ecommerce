import "./card.css";
import axios from "axios";
import { useCart } from "../contexts/context/cart-context";
import { useAuth } from "../contexts/context/authentication-context";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useWishList } from "../contexts/context/wishlist-context";
import { removeFromWishList } from "../Utilities-Functions/removeFromWishlist";
import { addToCart } from "../Utilities-Functions/addToCart";
import { addToWishList } from "../Utilities-Functions/addToWishList";

const Card = ({ productData }) => {

    const {img, title, description, price, cutPrice, discount, rating, badge} = productData;
    const { cartState, cartDispatch } = useCart();
    const { wishState, wishDispatch } = useWishList();
    const { authState } = useAuth();
    const navigate = useNavigate();

    const liked = wishState.wishListProducts.find( item => item._id === productData._id);

    return (
        <div className="card-wrapper">
            <span className="card-unavailable hide">Currently unavailable</span>
            <div className="card">
            <div className="card-image">
                <img className="img-cards" src={img} alt="img" />
                <span className = {`badge-new ${!badge && "hide"}` } >Best Value</span>
                <span className={`${badge && "animate"}`}></span>
            </div>
            <div className="card-details">
                <div className="card-item">
                    <h1 className="card-product-name roboto">{title}</h1>

                    {
                        wishState.wishListProducts.find(item => item._id === productData._id)
                        ?
                        <span onClick={ () => removeFromWishList(productData, authState, wishDispatch) } className={`icon-card icon-heart ${ liked && "liked" }`}><i className="fas fa-heart heart-icon"></i></span>
                        :
                        <span onClick={ () => addToWishList(productData, authState, wishDispatch, navigate) } className={`icon-card icon-heart ${ liked && "liked" }`}><i className="fas fa-heart heart-icon"></i></span>
                    }

                    </div>
                    <div className="card-brief-detail">
                    <p>{description}</p>
                    </div>
                    <div className="rating-wrapper margin-bottom">
                        <section className="number-rating">
                            <span className="rat-num">{rating}</span>{" "}
                            <span className="rat-icon"><i className="fas fa-star"></i></span>
                        </section>
                        <span className="rat-count">(2,515)</span>
                    </div>
                    <div className="card-price">
                        Rs.
                        <span className="price">{price}</span>
                        <span className="price text-strike-over mr-left">Rs.{cutPrice}</span>
                        <span className="price text-discount mr-left">{discount}</span>
                    </div>
                    <div className="card-btn">
                    {
                        cartState.cart.find(item => item._id === productData._id )

                        ? <button className="btn-card btn-primary-card btn-bg-color">
                            <span className="icon-card"><i className="fas fa-shopping-cart"></i></span>
                            <Link to="/cart" >Go To Cart</Link>
                          </button> 

                        : <button onClick={ () => addToCart(productData, authState, cartDispatch, navigate) } className="btn-card btn-primary-card">
                            <span className="icon-card"><i className="fas fa-shopping-cart"></i></span>
                            Add To Cart
                          </button>
                    }
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export {Card};