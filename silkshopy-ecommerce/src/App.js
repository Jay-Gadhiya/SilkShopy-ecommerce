import "./App.css";
import logo from "./logo.png";
import { products } from "./backend/db/products"
import { Home } from "./pages/Homepage/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import { ProductListing } from "../src/pages/ProductListing/ProductListing";
import { Cart } from "../src/pages/Cart/Cart";
import { Wishlist } from "../src/pages/Wishlist/Wishlist";
import { Login } from "../src/pages/Authentication/Login";
import { Signup } from "../src/pages/Authentication/Signup";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App;