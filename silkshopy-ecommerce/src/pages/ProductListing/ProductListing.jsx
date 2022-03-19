import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer/Footer";
import { Filters } from "./components/Filter";
import "./ProductListing.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFilter } from "../../contexts/context/filter-context";
import { sortByPrice } from "./functions/sort-price";
import { sortByRating } from "./functions/sort-rating";
import { priceRangeFilter } from "./functions/price-range";

const ProductListing = () => {
  const [product, setProduct] = useState([]);

  const { state } = useFilter();
  console.log(state);
  const { sortBy, rating, showAllProducts, laptopOnly, phoneOnly, headPhoneOnly, gamingOnly, priceRange } = state;

  const priceRangeData = priceRangeFilter(product, priceRange);
  const sortedData = sortByPrice(sortBy, priceRangeData);
  const ratingData = sortByRating(sortedData, rating);

  useEffect(
    () =>
      (async () => {
        try {
          const res = await axios.get("/api/products");
          setProduct(() => res.data.products);
        } catch (error) {
          console.log(error);
        }
      })(),
    []
  );

  return (
    <>
      <div className="page-container">
        <Filters />

        <main className="product-listing-container">
          <h2 className="product-main-heading margin-bottom">Products</h2>

          <div className="product-cards">
            {product &&
              ratingData.map((item) => (
                <Card key={item.id} productData = {item} />
              ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export { ProductListing };
