
const Card = () => {
    return (
        <div className="card-wrapper">
            <span className="card-unavailable hide">Currently unavailable</span>
            <div className="card">
            <div className="card-image">
                <img className="img-cards" src="https://silkshopyy.netlify.app/images/back-lap-img.jpeg" alt="img" />
                <span className="badge-new">New</span>
            </div>
            <div className="card-details">
                <div className="card-item">
                    <h1 className="card-product-name">ASUS VivoBook</h1>
                    <span className="icon-card icon-heart"
                        ><i className="fas fa-heart"></i
                    ></span>
                    </div>
                    <div className="card-brief-detail">
                    <p>Ultra Ryzen 7 Octa Core</p>
                    </div>
                    <div className="card-price">
                    Rs.
                    <span className="price">67,990</span>
                    <span className="price text-strike-over">Rs.84,990</span>
                    <span className="price text-discount">20%</span>
                    </div>
                    <div className="card-btn">
                    <button className="btn-card btn-primary-card">
                        <span className="icon-card"><i className="fas fa-shopping-cart"></i></span>
                        <a href="/Product-Listing/product.html" className="active-link">Add to Cart</a>
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export {Card};