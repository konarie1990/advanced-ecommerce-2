import React from "react";

function ProductDetail(props) {
  return (
    <div className="grid_1_of_5 images_1_of_5">
      <img src={props.Src} />
      <h3>{props.Title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit.
      </p>
      <h4>{props.Price}</h4>
      <div className="button">
        <span>
          <a href="singlepage.html">Read More</a>
        </span>
      </div>
    </div>
  );
}

export default ProductDetail;