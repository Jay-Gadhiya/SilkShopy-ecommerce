
const CartProduct = () => {
    return (
        <div className="card-horizontal-wrapper">
                <span className="card-unavailable hide">Currently unavailable</span>
                <div className="horizontal-card">
                <div className="card-horizontal-image">
                    <img className="img-cards horizontal-img" src="https://silkshopyy.netlify.app/images/sam-9a.jpeg" alt="img" />
                    <span className="badge-new hide">New</span>
                    <span className="delete-icon hide">&times;</span>
                </div>
                <div className="card-details">
                    <div className="card-item">
                    <h1 className="card-product-name">Redmi 9A Sport</h1>
                    <span className="icon-card icon-heart hide"><i className="fas fa-heart"></i></span>
                    </div>
                    <div className="card-brief-detail">
                    <p>
                        Metallic Blue, 32 GB
                    </p>
                    </div>
                    <div className="card-price">
                    Rs.
                    <span className="price">7,798</span>
                    <span className="price text-strike-over">Rs.7,998</span>
                    <span className="price text-discount">2%</span>
                    </div>

                    <div className="quantity flex">
                    <label htmlFor="quantity">Quantity :</label>
                    <button className="quantity-btn">-</button>
                    <span className="quantity-number">1</span>
                    <button className="quantity-btn">+</button>
                    </div>

                    <div className="card-btn-horizontal">
                    <button className="btn-card btn-primary-card">
                        Remove from Cart
                    </button>
                    <button className="btn-card btn-wishlist">
                        Move to Wishlist
                    </button>
                    </div>
                </div>
                </div>
        </div> 
    )
}

export {CartProduct};