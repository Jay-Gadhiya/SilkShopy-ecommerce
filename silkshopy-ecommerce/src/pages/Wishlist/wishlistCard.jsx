import "./wishListCard.css";
import { useAuth } from "../../contexts/context/authentication-context";
import { useWishList } from "../../contexts/context/wishlist-context";
import { useCart } from "../../contexts/context/cart-context";
import { Link } from "react-router-dom";


const WishListCard = ({ product }) => {

    const { img, title, description, price, cutPrice, discount, rating, badge } = product;
    const { authState } = useAuth();
    const { wishDispatch } = useWishList();
    const { cartState, cartDispatch } = useCart();

    const removeFromWishList = (item) => {
        wishDispatch({type : "REMOVE_FROM_WISHLIST", payload : item });
    }

    const moveToCart = (item) => {
        cartDispatch({type : "ADD_TO_CART", payload : item });
    }


    return (
        <div className="card-wrapper js-dismiss box-shadow">
            <span className="card-unavailable hide">Currently unavailable</span>
            <div className="card">
                <div className="card-image">
                <img className="img-cards" src={img} alt="img" />
                <span className = {`badge-new ${!badge && "hide"}` } >Best Value</span>
                <span className={`${badge && "animate"}`}></span>
                <span onClick={() => removeFromWishList(product)} className="delete-icon">&times;</span>
                </div>
                <div className="card-details">
                <div className="card-item">
                    <h1 className="card-product-name">{ title }</h1>
                    <span className="icon-card icon-heart wishlisted-color"><i className="fas fa-heart"></i></span>
                </div>
                <div className="card-brief-detail">
                    <p> { description } </p>
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

                        : <button onClick={ () => moveToCart(product) } className="btn-card btn-primary-card">
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