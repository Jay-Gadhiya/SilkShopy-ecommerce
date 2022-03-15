import {Card} from "../../components/Card";
import { Filters } from "./components/Filter";
import "./ProductListing.css";

const ProductListing = () => {
    return (
        <div class="page-container">
            
            <Filters />

            <main class="product-listing-container">
                <h2 class="product-main-heading margin-bottom">Products</h2>

                <div class="product-cards">
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
    )
}

export {ProductListing}