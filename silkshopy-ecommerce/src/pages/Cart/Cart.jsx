import "./Cart.css";
import { CartBill } from "./components/CartBill"
import { CartProduct } from "./components/CartProduct"

const Cart = () => {
    return (
        <>
            <h2 class="my-cart-heading">My Cart</h2>

            <main class="purchase-area flex">
                <div className="column-cards">
                    <CartProduct />
                    <CartProduct />
                </div>
                
                <CartBill />
            </main>
        </>

    )
}

export {Cart};