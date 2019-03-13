import React from "react";
import PropTypes from "prop-types";

const ProductDetail = props => {
  return <div>{props.product}</div>;
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

ProductDetail.defaultProps = {
  product: "default"
};

export default ProductDetail;
