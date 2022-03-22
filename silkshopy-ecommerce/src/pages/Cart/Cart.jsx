import { Footer } from "../../components/Footer/Footer";
import { useCart } from "../../contexts/context/cart-context";
import "./Cart.css";
import { CartBill } from "./components/CartBill"
import { CartProduct } from "./components/CartProduct"

const Cart = () => {

    const { cartState } = useCart();

    return (
        <>
            <h2 className="my-cart-heading">My Cart</h2>

            <main className="purchase-area flex">
                <div className="column-cards">

                    {cartState.cart && cartState.cart.map(item => (
                         <CartProduct key={ item.id } product = { item } />
                    )) }
                    
                </div>
                
                <CartBill />
            </main>
            <Footer />
        </>

    )
}

export {Cart};