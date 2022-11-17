import React from "react";
import "./productCard.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


const ProductCard = ({ Products }) => {
  const { image, id, title, price } = Products;

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "green",
    value: Products.rating.rate,
    isHalf: true,
  };



  return (
<>
    {Products ? 
    <div className="cart-components">
        <Link to={`/ProductdetailsData/${id}`}>
        <div className="cart-wrapper">
          <div className="img-wrapper">
            <img src={image} alt="" />
          </div>
          <div className="text-wrapper item">
            <span className="ProductName">{title}</span>
          </div>
          <div className="price">{`₹${price}`}</div>

          <ReactStars {...options} />
        </div>
    </Link>
      </div> : "loding.."}
  </>
  )

};

export default ProductCard;
