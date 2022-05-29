import { useAddress } from "../../../contexts/context/addressContext";
import { AddressModal } from "../../../components/addressModal/addressModal";
import { deleteAddressHandler, editAddressHandler } from "../../../Utilities-Functions/addressHandler";
import { useState } from "react";
import { useAuth } from "../../../contexts/context/authentication-context";

export const Addresses = () => {

    const { addressState, addressData, setAddressData, addressDispatch } = useAddress();
    const [showModal, setShowModal] = useState(false);
    const { authState } = useAuth();

    const editDataHadnler = (addr) => {
        setAddressData(addr);
        setShowModal(true);
    }

    const deleteAddress = (addrId) => {
        deleteAddressHandler(authState.token, addrId, addressDispatch);
    }

    return (

        <>
        {
            showModal
            &&
            <AddressModal setShowModal={setShowModal} />

        }
            <div>
                {
                    addressState?.address.map(item => (
                        <div key={item._id} className="addr mrbot">
                            <p className="addr-name">{item?.name}</p>
                            <p>{item?.street} , {item?.city}, {item?.state},</p>
                            <p>{item?.country}, {item?.zipCode}</p>
                            <div className="addr-operation">
                                <button onClick={() => editDataHadnler(item)} className="addr-operation-btn">Edit</button>
                                <button onClick={() => deleteAddress(item._id)} className="addr-operation-btn-sec">Remove</button>
                            </div>
                        </div>
                    ))
                    
                }

                <p onClick={() => setShowModal(true)} className="add-addr"><span>+</span> Add New Address</p>

            </div>
        </>
    )
}