import "./App.css";
import logo from "./logo.png";
import {products} from "./backend/db/products"
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Homepage/Home";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Wishlist } from "./pages/Wishlist/Wishlist.jsx";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Authentication/Login";
import { Signup } from "./pages/Authentication/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App;