import { useState } from "react";
import { useFilter } from "../../../contexts/context/filter-context";

export const MobileFIlter = () => {

    const { state, dispatch } = useFilter();
    const {priceRange, sortBy, rating, laptopOnly, phoneOnly, headPhoneOnly, gamingOnly} = state;
    const [showFilter, setShowFilter] = useState(false);

    const filterActionHandler = () => {
        setShowFilter(open => !open);
    }

    const clearAllFilterHandler = () => {
        dispatch({ type: "CLEAR" });
        setShowFilter(false);
    };

    
    
    return (
        <>
        <div className={`res-mob-aside aside-sec filter-show ${showFilter ? "" : "hide-fil"}`}>
        <section className="aside-sec">
            <div className="filter-clear-sec flex-center margin-bottom">    
                <span className="filter font-style">
                    Filters
                </span>
                <span className="clear">
                    <button onClick={() => dispatch({ type: "CLEAR" })} className="btn btn-clear btn-secondary-link">
                        <a href="#">Clear</a>
                    </button>
                </span>
            </div>
            
            <div className="price-container margin-bottom">
            <label htmlFor="price" className="price font-style">Price</label>
            <div className="price-devide flex-center">
                <span className="amount">10k</span>
                <span className="amount">20k</span>
                <span className="amount">30k</span>
                <span className="amount">40k</span>
                <span className="amount">50k</span>
            </div>
            <input 
                type="range" 
                min="10000" 
                max="50000" 
                step="10000" 
                className="price-input"
                value={priceRange}
                onChange={(e) => dispatch({ type: "RANGE", payload: e.target.value })}
            />
            </div>

            <div className="sort-price-container flex margin-bottom">
            <label htmlFor="Sort by" className="font-style sort-by-label">Sort by</label>

            <div className="sort-price flex">
                <input 
                type="radio" 
                name="priceM" 
                id="low-to-high"
                checked={ sortBy === "LOW_TO_HIGH" }
                onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
                />
                <label htmlFor="low-to-high">Price : Low to High</label>
            </div>

            <div className="sort-price flex">
                <input 
                type="radio" 
                name="priceM" 
                id="high-to-low" 
                checked={ sortBy === "HIGH_TO_LOW" }
                onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
                />
                <label htmlFor="high-to-low">Price : High to Low</label>
            </div>
            </div>

            <div className="sort-price-container flex margin-bottom">
            <label htmlFor="Category" className="font-style sort-by-label">Category</label>

            <div className="sort-price flex">
                <input 
                type="checkbox" 
                name="smartphones" 
                id="smartphones"
                checked={phoneOnly}
                onChange={() => dispatch({ type: "TOGGLE_SMARTPHONE" })}
                />
                <label htmlFor="smartphones">Smartphones</label>
            </div>

            <div className="sort-price flex">
                <input 
                type="checkbox" 
                name="laptops" 
                id="laptops" 
                checked={laptopOnly}
                onChange={() => dispatch({ type: "TOGGLE_LAPTOP" })}
                />
                <label htmlFor="laptops">Laptops</label>
            </div>

            <div className="sort-price flex">
                <input 
                type="checkbox" 
                name="Headphones" 
                id="Headphones" 
                checked={headPhoneOnly}
                onChange={() => dispatch({ type: "TOGGLE_HEADPHONE" })}
                />
                <label htmlFor="Headphones">Headphones</label>
            </div>

            <div className="sort-price flex">
                <input 
                type="checkbox" 
                name="gaming" 
                id="gaming" 
                checked={gamingOnly}
                onChange={() => dispatch({ type: "TOGGLE_GAMING" })}
                />
                <label htmlFor="gaming">Gaming</label>
            </div>
            </div>
 
            <div className="sort-price-container flex">
            <label htmlFor="Sort by" className="font-style sort-by-label">Rating</label>

            <div className="sort-price flex">
                <input 
                type="radio" 
                name="ratingM" 
                id="four-and-above"
                checked ={rating === "4_AND_ABOVE"}
                onChange={() => dispatch({ type: "RATING", payload: "4_AND_ABOVE" })}
                />
                <label htmlFor="4 Star & above">4 <i class="fas fa-star fa-color "></i> & above</label>
            </div>

            <div className="sort-price flex">
                <input 
                type="radio" 
                name="ratingM" 
                id="three-and-above"
                checked ={rating === "3_AND_ABOVE"}
                onChange={() => dispatch({ type: "RATING", payload: "3_AND_ABOVE" })}
                 />
                <label htmlFor="3 Star & above">3 <i class="fas fa-star fa-color "></i> & above</label>
            </div>

            <div className="sort-price flex">
                <input 
                type="radio" 
                name="ratingM" 
                id="two-and-above" 
                checked ={rating === "2_AND_ABOVE"}
                onChange={() => dispatch({ type: "RATING", payload: "2_AND_ABOVE" })}
                />
                <label htmlFor="2 Star & above">2 <i class="fas fa-star fa-color "></i> & above</label>
            </div>

            <div className="sort-price flex">
                <input 
                type="radio" 
                name="ratingM" 
                id="one-and-above"
                checked ={rating === "1_AND_ABOVE"} 
                onChange={() => dispatch({ type: "RATING", payload: "1_AND_ABOVE" })}
                />
                <label htmlFor="1 Star & above">1 <i class="fas fa-star fa-color "></i> & above</label>
            </div>
            </div>
        </section>
    </div>
    <div  className="filters-wrapper-moble">
        <button onClick={clearAllFilterHandler} className="btn-filter-mobile">Clear All</button>
        <button onClick={filterActionHandler} className="btn-filter-mobile btn-filters">{showFilter ? "Apply" : "Filters"}</button>
    </div>
    </>
    )
}
