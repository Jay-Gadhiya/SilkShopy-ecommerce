
const CartProduct = () => {
    return (
        <div class="card-horizontal-wrapper">
                <span class="card-unavailable hide">Currently unavailable</span>
                <div class="horizontal-card">
                <div class="card-horizontal-image">
                    <img class="img-cards horizontal-img" src="https://silkshopyy.netlify.app/images/sam-9a.jpeg" alt="img" />
                    <span class="badge-new hide">New</span>
                    <span class="delete-icon hide">&times;</span>
                </div>
                <div class="card-details">
                    <div class="card-item">
                    <h1 class="card-product-name">Redmi 9A Sport</h1>
                    <span class="icon-card icon-heart hide"><i class="fas fa-heart"></i></span>
                    </div>
                    <div class="card-brief-detail">
                    <p>
                        Metallic Blue, 32 GB
                    </p>
                    </div>
                    <div class="card-price">
                    Rs.
                    <span class="price">7,798</span>
                    <span class="price text-strike-over">Rs.7,998</span>
                    <span class="price text-discount">2%</span>
                    </div>

                    <div class="quantity flex">
                    <label for="quantity">Quantity :</label>
                    <button class="quantity-btn">-</button>
                    <span class="quantity-number">1</span>
                    <button class="quantity-btn">+</button>
                    </div>

                    <div class="card-btn-horizontal">
                    <button class="btn-card btn-primary-card">
                        Remove from Cart
                    </button>
                    <button class="btn-card btn-wishlist">
                        Move to Wishlist
                    </button>
                    </div>
                </div>
                </div>
        </div> 
    )
}

export {CartProduct};