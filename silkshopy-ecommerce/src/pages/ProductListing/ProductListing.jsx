import {Card} from "../../components/Card";
import { Footer } from "../../components/Footer/Footer";
import { Filters } from "./components/Filter";
import "./ProductListing.css";

const ProductListing = () => {
    return (
        <>
        <div className="page-container">
            
            <Filters />

            <main className="product-listing-container">
                <h2 className="product-main-heading margin-bottom">Products</h2>

                <div className="product-cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </div>
        <Footer />
        </>
    )
}

export {ProductListing}