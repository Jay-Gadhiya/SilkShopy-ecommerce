import "./Loader.css";
import { useState } from "react";
import { SwapSpinner } from "react-spinners-kit";

const Loader = () => {

    const [loading, setLoading] = useState(true);
    const loaderColor = "#f8a60f";

    return (

        <div className="loader">
            <SwapSpinner  color={loaderColor} size={80} loading={loading} />
        </div>
    
     
    );
}



export { Loader };