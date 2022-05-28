import { createContext, useContext, useEffect, useReducer } from "react";
import { getAddressHandler } from "../../Utilities-Functions/addressHandler";
import { addressReducer } from "../reducers/addressReducer";
import { useAuth } from "./authentication-context";


const AddressContext = createContext();
const useAddress = () => useContext(AddressContext);

const initialValue = {
    address : [],
}

const dummyAddress = {
    name: "Balraj Singh",
    street: "B-201, crystal road, alpha apartments ",
    city: "Ludhiyana",
    state: "Punjab",
    country: "India",
    zipCode: "207814",
    mobile: "6355643681",
}


const AddressProvider = ({ children }) => {

    const [addressState, addressDispatch] = useReducer(addressReducer ,initialValue);

    const { getToken } = useAuth();

    useEffect(() => {
        getAddressHandler(getToken, addressDispatch);
    }, []);
    

    return (
        <AddressContext.Provider value={{addressState, addressDispatch, dummyAddress}}>
            { children }
        </AddressContext.Provider>
    )
}

export { useAddress, AddressProvider };