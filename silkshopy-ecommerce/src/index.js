import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { FilterProvider } from "./contexts/context/filter-context";
import { AuthProvider } from "./contexts/context/authentication-context";
import { CartProvider } from "./contexts/context/cart-context";
import { WishListProvider } from "./contexts/context/wishlist-context";
import { AddressProvider } from "./contexts/context/addressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FilterProvider>
          <CartProvider>
            <WishListProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </WishListProvider>
          </CartProvider>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
