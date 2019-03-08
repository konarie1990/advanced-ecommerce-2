import React from "react";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="wrap">
        <Header />

        <ImageSlider />

        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5>
                <span>FEATURED</span> PRODUCTS
              </h5>
              <div className="section group">
                <ProductDetail 
								Src={}

								/>
								<ProductDetail />
								<ProductDetail />
								<ProductDetail />
								<ProductDetail />
								<ProductDetail />
								<ProductDetail />
								<ProductDetail />
								<ProductDetail />
								

              </div>
            </div>
          </div>
        </div>
        <div className="clear"> </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
