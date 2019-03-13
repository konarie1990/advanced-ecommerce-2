import React from "react";
import PropTypes from "prop-types";

const ProductDetail = props => {
  return (
    <div className="content">
      <div className="products-box">
        <div className="products">
          <h5>
            <span>FEATURED</span> PRODUCTS
          </h5>
          <div className="section group">
            <div className="grid_1_of_5 images_1_of_5">
              <img src="images/g1.jpg" />
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              <h4>$512.00</h4>
              <div className="button">
                <span>
                  <a href="singlepage.html">Read More</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  imgUrl: PropTypes.any,
  category: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number
};

ProductDetail.defaultProps = {
  id: 1,
  name: "somebody's name",
  description: "lorem ipsum",
  price: "$1",
  imgUrl: PropTypes.any,
  category: "cool cars",
  rating: 100,
  reviews: 5
};

export default ProductDetail;
