import "./Wishlist.css";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer/Footer";
import { WishListCard } from "./wishlistCard";
import { useWishList } from "../../contexts/context/wishlist-context";
import { useAuth } from "../../contexts/context/authentication-context";
import { Link } from "react-router-dom";
import { emptyWishList } from "../../assets/export";

const Wishlist = () => {

    const { wishState } = useWishList();
    const { authState } = useAuth();


    return (
        <>
            <h2 className="my-cart-heading">My Wishlist</h2>

            {
                wishState.wishListProducts.length !== 0
                
                ?

                <>
                    <section className="products-in-wishlist flex">

                    {
                        wishState.wishListProducts.map( item => <WishListCard key={item._id} product = {item} /> )
                        
                    }

                    </section>
                    <Footer />
                </>

                :

                <div className="empty-cart empty-wishlist" >
                <img className="empty-cart-img empty-wishlist-img" src= {emptyWishList} alt="image" />
                {
                    authState.token 
                    ?
                    <>
                    <p className=" subtext-cart pd-left">Your Wish List is empty!</p>
                    <button className="btn btn-primary cart-btn pd-left"> <Link to="/productListing">Check Products Now</Link></button>
                    </> 
                    :
                    <>
                    <p className=" subtext-cart pd-left">Login to see the items in Wish List</p>
                    <button className="btn btn-primary cart-btn pd-left"> <Link to="/login">Login Now</Link></button>
                    </>
                }
                
                </div>

            }

            
        </>
    )
}

export {Wishlist};