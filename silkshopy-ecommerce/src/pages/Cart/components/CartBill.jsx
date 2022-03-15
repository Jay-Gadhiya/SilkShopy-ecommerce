
const CartBill = () => {
    return (
        <section class="order-card-price flex">
                <h3 class="order-heading">Price Details</h3>

                <span class="separator"></span>

                <div class="order-details flex">
                    <span class="charge-type-name">Price (1 item)</span>
                    <span class="charge-amount">Rs. <span class="rs">4999</span></span>
                </div>

                <div class="order-details flex mr-top">
                    <span class="charge-type-name">Discount</span>
                    <span class="charge-amount">-Rs. <span class="rs">1999</span></span>
                </div>

                <div class="order-details flex mr-top">
                    <span class="charge-type-name">Delivery Charges</span>
                    <span class="charge-amount">Rs. <span class="rs">499</span></span>
                </div>

                <span class="separator"></span>

                <div class="order-details flex">
                    <h3 class="order-heading">Total Price</h3>
                    <h3 class="total-amount">Rs. 3999</h3>
                </div>


                <button class="btn-card btn-primary-card">
                    Place order
                </button>

            </section>
    )
}

export {CartBill};