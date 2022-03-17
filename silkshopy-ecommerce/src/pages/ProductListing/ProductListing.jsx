import {Card} from "../../components/Card";
import { Footer } from "../../components/Footer/Footer";
import { Filters } from "./components/Filter";
import "./ProductListing.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductListing = () => {

    const [product, setProduct] = useState();


    useEffect(() => (async() => {
        try {
            const res = await axios.get("/api/products");
            setProduct(() => res.data.products);
        }
        catch(error) {
            console.log(error);
        }
    })(),[]);

    return (
        <>
        <div className="page-container">
            
            <Filters />

            <main className="product-listing-container">
                <h2 className="product-main-heading margin-bottom">Products</h2>

                <div className="product-cards">
                    {product && product.map(item => (
                        <Card 
                            key={item.id}
                            image = {item.img}
                            title = {item.title}
                            description = {item.description}
                            price = {item.price}
                            cutPrice = {item.cutPrice}
                            discount = {item.discount}
                            rating = {item.rating}
                            badge = {item.badge}
                        />
                    ))}
                </div>
            </main>
        </div>
        <Footer />
        </>
    )
}

export {ProductListing}