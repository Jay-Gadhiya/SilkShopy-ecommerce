import "./App.css";
import logo from "./logo.png";
import {products} from "./backend/db/products"
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Homepage/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App;