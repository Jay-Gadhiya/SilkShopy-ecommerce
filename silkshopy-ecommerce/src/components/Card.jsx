import "./card.css";

const Card = ({image, title, description, price, cutPrice, discount, rating, badge}) => {
    return (
        <div className="card-wrapper">
            <span className="card-unavailable hide">Currently unavailable</span>
            <div className="card">
            <div className="card-image">
                <img className="img-cards" src={image} alt="img" />
                <span className = {`badge-new ${!badge && "hide"}` } >New</span>
            </div>
            <div className="card-details">
                <div className="card-item">
                    <h1 className="card-product-name">{title}</h1>
                    <span className="icon-card icon-heart"
                        ><i className="fas fa-heart"></i
                    ></span>
                    </div>
                    <div className="card-brief-detail">
                    <p>{description}</p>
                    </div>
                    <div class="rating-wrapper margin-bottom">
                        <section class="number-rating">
                            <span class="rat-num">{rating}</span>{" "}
                            <span class="rat-icon"><i class="fas fa-star"></i></span>
                        </section>
                        <span class="rat-count">(2,515)</span>
                    </div>
                    <div className="card-price">
                    Rs.
                    <span className="price">{price}</span>
                    <span className="price text-strike-over">Rs.{cutPrice}</span>
                    <span className="price text-discount">{discount}</span>
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