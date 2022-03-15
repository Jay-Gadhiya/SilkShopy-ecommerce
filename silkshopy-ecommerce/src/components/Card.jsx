
const Card = () => {
    return (
        <div class="card-wrapper">
            <span class="card-unavailable hide">Currently unavailable</span>
            <div class="card">
            <div class="card-image">
                <img class="img-cards" src="https://silkshopyy.netlify.app/images/back-lap-img.jpeg" alt="img" />
                <span class="badge-new">New</span>
            </div>
            <div class="card-details">
                <div class="card-item">
                <h1 class="card-product-name">ASUS VivoBook</h1>
                <span class="icon-card icon-heart"
                    ><i class="fas fa-heart"></i
                ></span>
                </div>
                <div class="card-brief-detail">
                <p>Ultra Ryzen 7 Octa Core</p>
                </div>
                <div class="card-price">
                Rs.
                <span class="price">67,990</span>
                <span class="price text-strike-over">Rs.84,990</span>
                <span class="price text-discount">20%</span>
                </div>
                <div class="card-btn">
                <button class="btn-card btn-primary-card">
                    <span class="icon-card"><i class="fas fa-shopping-cart"></i></span>
                    <a href="/Product-Listing/product.html" class="active-link">Add to Cart</a>
                </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export {Card};