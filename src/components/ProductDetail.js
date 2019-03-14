import React from "react";
import PropTypes from "prop-types";

const ProductDetail = props => {
  return (
    <div className="grid_1_of_5 images_1_of_5">
      <h3>Title: {props.product.name}</h3>
      <p>Description: {props.product}</p>
      <h4>Price: {props.product}</h4>
      <div className="button">
        <span>
          <a href="singlepage.html">Read More</a>
        </span>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

ProductDetail.defaultProps = {
  product: "default"
};

export default ProductDetail;
// return <div>{props.product}</div>;
