import { useEffect, useState } from "react";
import { AddressModal } from "../../components/addressModal/addressModal";
import { useAddress } from "../../contexts/context/addressContext";
import { useAuth } from "../../contexts/context/authentication-context";
import { useCart } from "../../contexts/context/cart-context";
import { useOrder } from "../../contexts/context/orderContext";
import { useNavigate } from "react-router";
import "./checkout.css";
import axios from "axios";

export const CheckOutPage = () => {

    const [showModal, setShowModal] = useState(false);
    const { addressState, currentAddress, setCurrentAddress } = useAddress();
    const { cartState, cartDispatch } = useCart();
    const { orderDispatch } = useOrder();
    const { authState } = useAuth();
    const navigate = useNavigate();
    const token = authState.token;
    const newDate = new Date();
    


    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
        });
      };

    const clearCart = async () => {
        cartState.cart.forEach(item => {
            axios.delete(`/api/user/cart/${item._id}`, {
                headers: {
                  authorization: token,
                },
              })
        })

        cartDispatch({type : "CLEAR_CART"});
        navigate("/profile/order");

        
    }


    const displayPaymentHandler = async () => {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
        }
    
        const options = {
          key: "rzp_test_0egWaV8haN0j4m", // Enter the Key ID generated from the Dashboard
          amount: cartState.totalPrice * 100,
          name: "SilkShopy",
          description: "Thanks from shopping, have a good day!",
          handler: function (response) {
            orderDispatch({
              type: "COMPLETE_ORDER",
              payload: {
                order: {
                  orderData: cartState.cart,
                  paymentId: response.razorpay_payment_id,
                  price : cartState.itemPrice,
                  totalAmount: cartState.totalPrice,
                  address: currentAddress,
                  date : newDate.toDateString(),
                },
              },
            });
            clearCart();
            //DAEqeSNkEPvdiJwgXMunMLdp
          },
          prefill: {
            name: "Madanlal Mithaivala",
            email: "madanlal@gmail.com",
            contact: "6355643681",
          },
          theme: {
            color: "#528FF0",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };


    return (
        <>
        {
            showModal
            &&
            <AddressModal setShowModal={setShowModal}/>

        }
        <main className="checkout-main">
            <h2 className="check-head">Checkout</h2>

            <div className="checkout-price-container">
                <section className="addre-sec">
                    {
                        addressState?.address.map(item => (
                            <div key={item._id} className="addre-detail">
                                <input onClick={() => setCurrentAddress(item)}
                                checked = {item._id === currentAddress?._id ? true : false}
                                className="select-addr" type="radio" name="addr" id="addr" />
                                <div className="addr">
                                    <p className="addr-name">{item.name}</p>
                                    <p>{item.street}, {item.city}, {item.state},</p>
                                    <p>{item.country}, {item.zipCode}</p>
                                    <p>{item.mobile}</p>
                                </div>
                            </div>
                        ))
                    }

                    <p onClick={() => setShowModal(true)} className="add-addr"><span>+</span> Add New Address</p>
                </section>

                <section className="checkout-bill-sec">
                    <div>
                        <p className="order">ORDER DETAILS</p>
                        <div className="check-items bolder-text">
                            <span className="">Item</span>
                            <span className="">Price</span>
                        </div>
                        {
                            cartState.cart.length !== 0
                            ?
                            <>
                                {
                                    cartState.cart.map(item => (
                                        <div key={item._id} className="check-items">
                                            <span className=""> {item?.title} ({item?.qty})</span>
                                            <span className="">Rs. {item?.price}</span>
                                        </div>
                                    ))
                                }
                            </>
                            :
                            <h3 className="msg">No items in cart</h3>

                        }

                    </div>

                    <div>
                        <p className="order">PRICE DETAILS</p>
                        <div className="check-items">
                            <span className="">Price ({cartState.cart.length} {cartState.cart.length > 1 ? "items" : "item"})</span>
                            <span className="">Rs. {cartState?.itemPrice}</span>
                        </div>
                        <div className="check-items">
                            <span className="">Discount</span>
                            <span className="">Rs. 500</span>
                        </div>
                        <div className="check-items">
                            <span className="">Delivery</span>
                            <span className="">FREE</span>
                        </div>

                        <div className="check-items bolder-text">
                            <span className="">Total Amount</span>
                            <span className="">Rs. {cartState?.totalPrice}</span>
                        </div>
                    </div>

                
                    <div>
                        <p className="order">DELIVERY TO</p>
                        {
                            currentAddress
                            ?
                            <div className="addr">
                                <p className="addr-name">{currentAddress?.name}</p>
                                <p>{currentAddress?.street} , {currentAddress?.city}, {currentAddress?.state},</p>
                                <p>{currentAddress?.country}, {currentAddress?.zipCode}</p>
                            </div>
                            :
                            <h3 className="msg">Please Select Address</h3>

                        }
                        
                    </div>


                    <button onClick={displayPaymentHandler} className="check-btn" disabled={currentAddress ? false : true}>PLACE ORDER</button>
                </section>
            </div>
        </main>
        </>
    )
}