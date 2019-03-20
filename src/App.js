import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import state from "./state";
import PropTypes from "prop-types";
// import from a separate file: if you see default in the export you can's use brackets.

function App(props) {
  const productsArr = state.products.filter(product => {
    let match = null;
    if (product.category === props.currentCategory) {
      match = product;
    }
    return match;
  });
  return (
    <div className="App">
      <div className="wrap">
        <div className="header">
          <Header />
          <div className="clear"> </div>
          <SubHeader />
          <div className="clear"> </div>
          <TopNav changeCategory={props.changeCategory} />

          <ImageSlider />
          <div className="clear"> </div>

          <div className="content">
            <div className="products-box">
              <div className="products">
                <h5>
                  <span>FEATURED</span> PRODUCTS
                </h5>
                <div className="section group">
                  {productsArr.map(product => (
                    <ProductDetail key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  changeCategory: PropTypes.func,
  currentCategory: PropTypes.string
};

export default App;
