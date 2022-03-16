import { Footer } from "../../components/Footer/Footer";
import "./Cart.css";
import { CartBill } from "./components/CartBill"
import { CartProduct } from "./components/CartProduct"

const Cart = () => {
    return (
        <>
            <h2 className="my-cart-heading">My Cart</h2>

            <main className="purchase-area flex">
                <div className="column-cards">
                    <CartProduct />
                    <CartProduct />
                </div>
                
                <CartBill />
            </main>
            <Footer />
        </>

    )
}

export {Cart};