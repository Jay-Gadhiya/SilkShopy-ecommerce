
const Filters = () => {
    return (
        <aside class="aside-sec">
            <div class="filter-clear-sec flex-center margin-bottom">
            <span class="filter font-style">Filters</span>
            <span class="clear">
                <button class="btn btn-clear btn-secondary-link">
                <a href="#">Clear</a>
                </button></span>
            </div>
            
            <div class="price-container margin-bottom">
            <label for="price" class="price font-style">Price</label>
            <div class="price-devide flex-center">
                <span class="amount">5000</span>
                <span class="amount">10,000</span>
                <span class="amount">50,000</span>
            </div>
            <input type="range" min="5000" max="80000" class="price-input" />
            </div>

            <div class="sort-price-container flex margin-bottom">
            <label for="Sort by" class="font-style sort-by-label">Sort by</label>

            <div class="sort-price flex">
                <input type="radio" name="price" id="low-to-high" />
                <label for="low-to-high">Price : Low to High</label>
            </div>

            <div class="sort-price flex">
                <input type="radio" name="price" id="low-to-high" />
                <label for="high-to-low">Price : High to Low</label>
            </div>
            </div>

            <div class="sort-price-container flex margin-bottom">
            <label for="Category" class="font-style sort-by-label">Category</label>

            <div class="sort-price flex">
                <input type="checkbox" name="smartphones" id="smartphones" />
                <label for="smartphones">Smartphones</label>
            </div>

            <div class="sort-price flex">
                <input type="checkbox" name="laptops" id="laptops" />
                <label for="laptops">Laptops</label>
            </div>

            <div class="sort-price flex">
                <input type="checkbox" name="Headphones" id="Headphones" />
                <label for="Headphones">Headphones</label>
            </div>

            <div class="sort-price flex">
                <input type="checkbox" name="gaming" id="gaming" />
                <label for="gaming">Gaming</label>
            </div>
            </div>

            <div class="sort-price-container flex">
            <label for="Sort by" class="font-style sort-by-label">Rating</label>

            <div class="sort-price flex">
                <input type="radio" name="rating" id="low-to-high" />
                <label for="4 Star & above">4 Star & above</label>
            </div>

            <div class="sort-price flex">
                <input type="radio" name="rating" id="low-to-high" />
                <label for="3 Star & above">3 Star & above</label>
            </div>

            <div class="sort-price flex">
                <input type="radio" name="rating" id="low-to-high" />
                <label for="2 Star & above">2 Star & above</label>
            </div>

            <div class="sort-price flex">
                <input type="radio" name="rating" id="low-to-high" />
                <label for="1 Star & above">1 Star & above</label>
            </div>
            </div>
        </aside>
    )
}

export {Filters};