import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer/Footer";
import { Filters } from "./components/Filter";
import "./ProductListing.css";
import { useFilter } from "../../contexts/context/filter-context";
import { catagoryFilter, sortByRating, sortByPrice, priceRangeFilter, useFetchData } from "./functions/export";

const ProductListing = () => {

  const  { product }  = useFetchData();
  const { state } = useFilter();
  const { sortBy, rating, showAllProducts, laptopOnly, phoneOnly, headPhoneOnly, gamingOnly, priceRange } = state;

  // filter functions
  const catagoryData = catagoryFilter(product, laptopOnly, phoneOnly, headPhoneOnly, gamingOnly);
  const ratingData = sortByRating(catagoryData, rating);
  const priceRangeData = priceRangeFilter(ratingData, priceRange);
  const sortedData = sortByPrice(sortBy, priceRangeData);


  return (
    <>
      <div className="page-container">

        <Filters />

        <main className="product-listing-container">
          <h2 className="product-main-heading margin-bottom">Products</h2>

          <div className="product-cards">
            {product && sortedData.map((item) => ( <Card key={item.id} productData = {item} /> ))}
          </div>
        </main>
        
      </div>

      <Footer />
    </>
  );
};

export { ProductListing };
