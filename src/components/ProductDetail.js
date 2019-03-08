import React from "react";
import products from "../state";

function ProductDetail() {
  return (
    <div id={products.id} className="grid_1_of_5 images_1_of_5">
      <img src={products.imgUrl} />
      <h3>{products.name}</h3>
      <p>{products.description}</p>
      <h4>{products.price}</h4>
      <div className="button">
        <span>
          <a href="singlepage.html">Read More</a>
        </span>
      </div>
    </div>
  );
}

export default ProductDetail;
