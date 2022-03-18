
const Filters = () => {
    return (
        <aside className="aside-sec">
            <div className="filter-clear-sec flex-center margin-bottom">
            <span className="filter font-style">Filters</span>
            <span className="clear">
                <button className="btn btn-clear btn-secondary-link">
                <a href="#">Clear</a>
                </button></span>
            </div>
            
            <div className="price-container margin-bottom">
            <label for="price" className="price font-style">Price</label>
            <div className="price-devide flex-center">
                <span className="amount">10k</span>
                <span className="amount">20k</span>
                <span className="amount">30k</span>
                <span className="amount">40k</span>
                <span className="amount">50k</span>
            </div>
            <input type="range" min="10000" max="50000" step="10000" className="price-input" />
            </div>

            <div className="sort-price-container flex margin-bottom">
            <label htmlFor="Sort by" className="font-style sort-by-label">Sort by</label>

            <div className="sort-price flex">
                <input type="radio" name="price" id="low-to-high" />
                <label htmlFor="low-to-high">Price : Low to High</label>
            </div>

            <div className="sort-price flex">
                <input type="radio" name="price" id="low-to-high" />
                <label htmlFor="high-to-low">Price : High to Low</label>
            </div>
            </div>

            <div className="sort-price-container flex margin-bottom">
            <label htmlFor="Category" className="font-style sort-by-label">Category</label>

            <div className="sort-price flex">
                <input type="checkbox" name="smartphones" id="smartphones" />
                <label htmlFor="smartphones">Smartphones</label>
            </div>

            <div className="sort-price flex">
                <input type="checkbox" name="laptops" id="laptops" />
                <label htmlFor="laptops">Laptops</label>
            </div>

            <div className="sort-price flex">
                <input type="checkbox" name="Headphones" id="Headphones" />
                <label htmlFor="Headphones">Headphones</label>
            </div>

            <div className="sort-price flex">
                <input type="checkbox" name="gaming" id="gaming" />
                <label htmlFor="gaming">Gaming</label>
            </div>
            </div>

            <div className="sort-price-container flex">
            <label htmlFor="Sort by" className="font-style sort-by-label">Rating</label>

            <div className="sort-price flex">
                <input type="radio" name="rating" id="low-to-high" />
                <label htmlFor="4 Star & above">4 Star & above</label>
            </div>

            <div className="sort-price flex">
                <input type="radio" name="rating" id="low-to-high" />
                <label htmlFor="3 Star & above">3 Star & above</label>
            </div>

            <div className="sort-price flex">
                <input type="radio" name="rating" id="low-to-high" />
                <label htmlFor="2 Star & above">2 Star & above</label>
            </div>

            <div className="sort-price flex">
                <input type="radio" name="rating" id="low-to-high" />
                <label htmlFor="1 Star & above">1 Star & above</label>
            </div>
            </div>
        </aside>
    )
}

export {Filters};