import axios from "axios";
import { useAuth } from "../../../contexts/context/authentication-context";
import { useCart } from "../../../contexts/context/cart-context";

const CartProduct = ({ product }) => {
     
    const { title, description, price, cutPrice, discount, rating, img, badge } = product;
    const { cartDispatch } = useCart();
    const { authState } = useAuth();

    const removeFromCart = async (item) => {
        console.log(item._id);

        if(authState.token){
            try {
                const res = await axios.delete(`/api/user/cart/${item._id}`, { headers : { authorization: authState.token } }); 
                cartDispatch({type : "REMOVE_FROM_CART", payload : item });
                console.log(res);
                
            } catch (error) {
                alert(error);
            }
        }
        
        else {
            navigate("/login");
        }
         
    }

    return (
        <div className="card-horizontal-wrapper">
                <span className="card-unavailable hide">Currently unavailable</span>
                <div className="horizontal-card">
                <div className="card-horizontal-image">
                    <img className="img-cards horizontal-img" src= {img} alt="img" />
                    {/* <span className={`badge-new ${!badge && "hide"}` }>New</span> */}
                    <span className="delete-icon hide">&times;</span>
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
                    <span className="price text-strike-over">Rs.{cutPrice}</span>
                    <span className="price text-discount">{discount}</span>
                    </div>

                    <div className="quantity flex">
                    <label htmlFor="quantity">Quantity :</label>
                    <button className="quantity-btn">-</button>
                    <span className="quantity-number">1</span>
                    <button className="quantity-btn">+</button>
                    </div>

                    <div className="card-btn-horizontal">
                    <button onClick={ () => removeFromCart(product) } className="btn-card btn-primary-card">
                        Remove from Cart
                    </button>
                    <button className="btn-card btn-wishlist">
                        Move to Wishlist
                    </button>
                    </div>
                </div>
                </div>
        </div> 
    )
}

export {CartProduct};