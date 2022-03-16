import "./Wishlist.css";
import { Card } from "../../components/Card";

const Wishlist = () => {
    return (
        <>
            <h2 className="my-cart-heading">My Wishlist</h2>

            <section className="products-in-wishlist flex">
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </>
    )
}

export {Wishlist};