import { useState } from "react";
import { useAddress } from "../../contexts/context/addressContext";
import { useAuth } from "../../contexts/context/authentication-context";
import { addAddressHandler } from "../../Utilities-Functions/addressHandler";
import "./addressModal.css";

export const AddressModal = ({ setShowModal }) => {

    const [addressData, setAddressData] = useState({name : "", street : "", city : "", state : "", country : "", zipCode : "", mobile : ""});
    const { addressDispatch, dummyAddress } = useAddress();
    const { authState } = useAuth();

    const fillDummyAddressHandler = () => {
        setAddressData(dummyAddress);
    }


    const addresssHandler = (e) => {
        setAddressData(pre => ({...pre, [e.target.name] : e.target.value}));
    }

    const addNewAddressHandler = () => {
        addAddressHandler(authState.token, addressData, addressDispatch);
        setShowModal(false);
    }

    return (
        <main className="address-modal-main">
            <div className="fill-area">
                <h2>Add New Address</h2>
                <input onChange={addresssHandler} value={addressData.name} className="adrre-input" placeholder="name" name="name" type="text" />
                <input onChange={addresssHandler} value={addressData.street} className="adrre-input" placeholder="Street" name="street" type="text" />
                <input onChange={addresssHandler} value={addressData.city} className="adrre-input" placeholder="City" name = "city" type="text" />
                <input onChange={addresssHandler} value={addressData.state} className="adrre-input" placeholder="State" name="state" type="text" />
                <input onChange={addresssHandler} value={addressData.country} className="adrre-input" placeholder="Country" name="country" type="text" />
                <input onChange={addresssHandler} value={addressData.zipCode} className="adrre-input" placeholder="6-digit Zip code" name="zipCode" type="number" />
                <input onChange={addresssHandler} value={addressData.mobile} className="adrre-input" placeholder="10-digit phone number" name="mobile" type="number" />
                <div className="addre-buttons">
                    <button onClick={addNewAddressHandler} className="fill-btn">Save</button>
                    <button onClick={fillDummyAddressHandler} className="fill-btn">Fill Dummy Data</button>
                    <button onClick={() => {
                        setShowModal(false);
                    }} className="fill-btn">
                        Cancle
                    </button>
                </div>
            </div>
        </main>
    )
}