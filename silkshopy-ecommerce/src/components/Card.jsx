import "./card.css";

const Card = ({productData}) => {

    const {img, title, description, price, cutPrice, discount, rating, badge} = productData;

    return (
        <div className="card-wrapper">
            <span className="card-unavailable hide">Currently unavailable</span>
            <div className="card">
            <div className="card-image">
                <img className="img-cards" src={img} alt="img" />
                <span className = {`badge-new ${!badge && "hide"}` } >Best Value</span>
                <span className={`${badge && "animate"}`}></span>
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
                        <section className="number-rating">
                            <span className="rat-num">{rating}</span>{" "}
                            <span className="rat-icon"><i className="fas fa-star"></i></span>
                        </section>
                        <span className="rat-count">(2,515)</span>
                    </div>
                    <div className="card-price">
                        Rs.
                        <span className="price">{price}</span>
                        <span className="price text-strike-over mr-left">Rs.{cutPrice}</span>
                        <span className="price text-discount mr-left">{discount}</span>
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