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
      </Routes>
    </>
    </>
  )
}

export default App;