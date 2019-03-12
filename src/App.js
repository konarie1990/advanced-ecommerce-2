import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";

function App(props) {
  return (
    <div className="App">
      <div className="wrap">
        <div className="header">
          <Header />
          <div className="clear"> </div>
          <div className="sub-header">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" title="logo" />
              </a>
            </div>
            <div className="sub-header-right">
              <ul>
                <li>
                  <a href="#">log in</a>
                </li>
                <li>
                  <a href="#">Your account</a>
                </li>
                <li>
                  <a href="#">
                    CART: (EMPTY) <img src="images/cart.png" title="cart" />
                  </a>
                </li>
              </ul>
              <input type="text" />
              <input type="submit" value="search" />
            </div>
            <div className="clear"> </div>
          </div>
          <div className="clear"> </div>
          <div className="top-nav">
            <ul>
              <li>
                <a href="carlights.html">car lights</a>
              </li>
              <li>
                <a href="carwheels.html">Car wheels</a>
              </li>
              <li>
                <a href="carbumpers.html">car bumpers</a>
              </li>
              <li>
                <a href="caradsystem.html">car audiosystem</a>
              </li>
              <li>
                <a href="truckbumpers.html">Truck bumpers</a>
              </li>
              <li>
                <a href="contact.html">Feedback</a>
              </li>
              <div className="clear"> </div>
            </ul>
          </div>
        </div>

        <ImageSlider />
        <ProductDetail />

        <div className="clear"> </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
