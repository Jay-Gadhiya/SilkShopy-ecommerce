import "./App.css";
import { Home } from "./pages/Homepage/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import { ProductListing } from "../src/pages/ProductListing/ProductListing";
import { Cart } from "../src/pages/Cart/Cart";
import { Wishlist } from "../src/pages/Wishlist/Wishlist";
import { Login } from "../src/pages/Authentication/Login";
import { Signup } from "../src/pages/Authentication/Signup";
import  Mockman  from "mockman-js";
import { Loader } from "./components/Loader/Loader";
import { useState } from "react";
import { CheckOutPage } from "./pages/checkoutPage/checkout";
import { ProfilePage } from "./pages/Profile/profile";
import { ProfileInfo } from "./pages/Profile/components/profile-info";
import { Addresses } from "./pages/Profile/components/Address";
import { OrderDetails } from "./pages/Profile/components/orderDetails";

function App() { 

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      { loading && <Loader /> }
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/checkout" element={<CheckOutPage />} />

        <Route path="/profile/" element={<ProfilePage />} >
          <Route path="" element={<ProfileInfo />} />
          <Route path="address" element={<Addresses />} />
          <Route path="order" element={<OrderDetails />} />
        </Route>

      </Routes>
    </>
    </>
  )
}

export default App;