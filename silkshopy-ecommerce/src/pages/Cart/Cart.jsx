import { Footer } from "../../components/Footer/Footer";
import { useCart } from "../../contexts/context/cart-context";
import "./Cart.css";
import { CartBill } from "./components/CartBill"
import { CartProduct } from "./components/CartProduct"
import { emptyCart } from "../../assets/export";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/context/authentication-context";

const Cart = () => {

    const { cartState } = useCart();
    const { authState } = useAuth();

    return (
        <>
            <h2 className="my-cart-heading">My Cart</h2>

           {
           cartState.cart.length !== 0 

           ?
           <> 
           <main className="purchase-area flex">
                <div className="column-cards">

                    {cartState.cart.map(item => (
                         <CartProduct key={ item.id } product = { item } />
                    )) }

                </div>
                
                <CartBill />
            </main> 
            <Footer />
            </>

            :
            <div className="empty-cart" >
                <img className="empty-cart-img" src= {emptyCart} alt="image" />
                {
                    authState.token 
                    ?
                    <>
                    <p className=" subtext-cart pd-left">Your cart is empty!</p>
                    <button class="btn btn-primary cart-btn pd-left"> <Link to="/productListing">Shop Now</Link></button>
                    </>
                    :
                    <>
                    <p className=" subtext-cart pd-left">Login to see the items in cart</p>
                    <button class="btn btn-primary cart-btn pd-left"> <Link to="/login">Login Now</Link></button>
                    </>
                }
                
            </div>

            }
            
        </>

    )
}

export {Cart};