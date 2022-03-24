import "./cartProduct.css";
import axios from "axios";
import { useAuth } from "../../../contexts/context/authentication-context";
import { useCart } from "../../../contexts/context/cart-context";
import { useWishList } from "../../../contexts/context/wishlist-context";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../../Utilities-Functions/removeFromCart";

const CartProduct = ({ product }) => {
     
    const { title, description, price, cutPrice, discount, img, qty} = product;
    const { cartDispatch } = useCart();
    const { authState } = useAuth();
    const { wishState, wishDispatch } = useWishList();

    const increaseQuantity = async (item) => {
        try {
            const res = await axios.post(`/api/user/cart/${item._id}`, { action : { type: "increment" } }, { headers : { authorization: authState.token } }); 
            cartDispatch({ type : "INCREASE_QUANTITY", payload : res.data.cart });
            
        } catch (error) {
            alert(error);
        }
    }
    

    const decreaseQuantity = async (item) => {
        try {
            const res = await axios.post(`/api/user/cart/${item._id}`, { action : { type: "decrement" } }, { headers : { authorization: authState.token } }); 
            cartDispatch({ type : "DECREASE_QUANTITY", payload : res.data.cart });
            
        } catch (error) {
            alert(error);
        }
        
    }

    const moveToWishList = (item) => {
        wishDispatch({ type: "ADD_TO_WISHLIST", payload : item });
    }

    return (
        <div className="card-horizontal-wrapper">
                <span className="card-unavailable hide">Currently unavailable</span>
                <div className="horizontal-card">
                <div className="card-horizontal-image">
                    <img className="img-cards horizontal-img" src= {img} alt="img" />
                </div>
                <div className="card-details">
                    <div className="card-item">
                    <h1 className="card-product-name">{title}</h1>
                    <span className="icon-card icon-heart hide"><i className="fas fa-heart"></i></span>
                    </div>
                    <div className="card-brief-detail">
                    <p>
                        {description}
                    </p>
                    </div>
                    <div className="card-price">
                        Rs.
                        <span className="price">{price}</span>
                        <span className="price text-strike-over mr-left">Rs.{cutPrice}</span>
                        <span className="price text-discount mr-left">{discount}</span>
                    </div>

                    <div className="quantity flex">
                    <label htmlFor="quantity">Quantity :</label>
                    <button  onClick={ () => decreaseQuantity(product) } disabled={product.qty <= 1 && true} className="quantity-btn">-</button>
                    <span className="quantity-number">{ qty }</span>
                    <button onClick={ () => increaseQuantity(product) } className="quantity-btn">+</button>
                    </div>

                    <div className="card-btn-horizontal">
                    <button onClick={ () => removeFromCart(product, authState, cartDispatch) } className="btn-card btn-primary-card">
                        Remove from Cart
                    </button>
                    
                   {
                       wishState.wishListProducts.find( item => item._id === product._id )
                       ?     
                       <button className="btn-card btn-wishlist">
                         <Link to="/wishList">Go To Wish List</Link> 
                       </button>   
                       :
                       <button onClick={ () => moveToWishList(product) } className="btn-card btn-wishlist">
                         Move To Wish List
                       </button>      
                   } 
 
                    
                    </div>
                </div>
                </div>
        </div> 
    )
}

export {CartProduct};