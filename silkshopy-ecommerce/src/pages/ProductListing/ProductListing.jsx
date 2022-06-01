import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer/Footer";
import { Filters } from "./components/Filter";
import "./ProductListing.css";
import { useFilter } from "../../contexts/context/filter-context";
import { catagoryFilter, sortByRating, sortByPrice, priceRangeFilter, useFetchData } from "./functions/export";
import { MobileFIlter } from "./components/mobileFilter";
 
const ProductListing = () => {

  const  { product }  = useFetchData();
  const { state } = useFilter();
  const { sortBy, rating, showAllProducts, laptopOnly, phoneOnly, headPhoneOnly, gamingOnly, priceRange, searchedProducts } = state;

  const getSearchedProduct = (product, searchedProducts ) => {
      return [...product].filter( item => item.title.toLowerCase().includes(searchedProducts));
  }


  // filter functions
  const searchedProduct = getSearchedProduct(product, searchedProducts);
  const catagoryData = catagoryFilter(searchedProduct, laptopOnly, phoneOnly, headPhoneOnly, gamingOnly);
  const ratingData = sortByRating(catagoryData, rating);
  const priceRangeData = priceRangeFilter(ratingData, priceRange);
  const sortedData = sortByPrice(sortBy, priceRangeData);

  return (
    <>
      <div className="page-container">

        <Filters />
        <MobileFIlter />

        <main className="product-listing-container">
          <h2 className="product-main-heading margin-bottom">Products</h2>
          {
            sortedData?.length !== 0
            ?
            <div className="product-cards">
              {product && sortedData.map((item) => ( <Card key={item.id} productData = {item}  /> ))}
            </div>
            :
            <h2 className="product-main-heading margin-bottom colr">No Products found</h2>

          }

          
        </main>
        
      </div>

      <Footer />
    </>
  );
};

export { ProductListing };
