import "./wishListCard.css";
import { useAuth } from "../../contexts/context/authentication-context";
import { useWishList } from "../../contexts/context/wishlist-context";
import { useCart } from "../../contexts/context/cart-context";
import { Link } from "react-router-dom";
import { removeFromWishList } from "../../Utilities-Functions/removeFromWishlist";
import { addToCart } from "../../Utilities-Functions/addToCart";

const WishListCard = ({ product }) => {

    console.log("wishlist card",product);
    const { img, title, description, price, cutPrice, discount, rating, badge } = product;
    const { authState } = useAuth();
    const { wishDispatch } = useWishList();
    const { cartState, cartDispatch } = useCart();

    return (
        <div className="card-wrapper js-dismiss box-shadow">
            <span className="card-unavailable hide">Currently unavailable</span>
            <div className="card">
                <div className="card-image">
                <img className="img-cards" src={img} alt="img" />
                <span className = {`badge-new ${!badge && "hide"}` } >Best Value</span>
                <span className={`${badge && "animate"}`}></span>
                <span onClick={() => removeFromWishList(product, authState, wishDispatch)} className="delete-icon">&times;</span>
                </div>
                <div className="card-details">
                <div className="card-item">
                    <h1 className="card-product-name">{ title }</h1>
                    <span className="icon-card icon-heart wishlisted-color"><i className="fas fa-heart"></i></span>
                </div>
                <div className="card-brief-detail">
                    <p> { description } </p>
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
                    <span className="price"> { price } </span>
                    <span className="price text-strike-over"> { cutPrice } </span>
                    <span className="price text-discount"> { discount } </span>
                </div>
                <div className="card-btn">
                
                    {
                        cartState.cart.find(item => item._id === product._id )

                        ? <button className="btn-card btn-primary-card btn-bg-color">
                            <span className="icon-card"><i className="fas fa-shopping-cart"></i></span>
                            <Link to="/cart" >Go To Cart</Link>
                          </button> 

                        : <button onClick={ () => addToCart(product, authState, cartDispatch) } className="btn-card btn-primary-card">
                            <span className ="icon-card"><i className="fas fa-shopping-cart"></i></span>
                            Move To Cart
                          </button>
                    }

                </div>
                </div>
            </div>
        </div>
    )
}

export { WishListCard };