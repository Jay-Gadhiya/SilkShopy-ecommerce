
const CartBill = () => {
    return (
        <section className="order-card-price flex">
                <h3 className="order-heading">Price Details</h3>

                <span className="separator"></span>

                <div className="order-details flex">
                    <span className="charge-type-name">Price (1 item)</span>
                    <span className="charge-amount">Rs. <span className="rs">4999</span></span>
                </div>

                <div className="order-details flex mr-top">
                    <span className="charge-type-name">Discount</span>
                    <span className="charge-amount">-Rs. <span className="rs">1999</span></span>
                </div>

                <div className="order-details flex mr-top">
                    <span className="charge-type-name">Delivery Charges</span>
                    <span className="charge-amount">Rs. <span className="rs">499</span></span>
                </div>

                <span className="separator"></span>

                <div className="order-details flex">
                    <h3 className="order-heading">Total Price</h3>
                    <h3 className="total-amount">Rs. 3999</h3>
                </div>


                <button className="btn-card btn-primary-card">
                    Place order
                </button>

            </section>
    )
}

export {CartBill};