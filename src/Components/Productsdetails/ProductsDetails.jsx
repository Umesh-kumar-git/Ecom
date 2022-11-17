import React from "react";
import { useDispatch } from "react-redux";
// import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Loding from "../LodingPage/Loding";
import "./ProductsDetails.css";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";






function ProductsDetails({ ProductsData }) {

  


   


   
   const dispatch = useDispatch();
   
   const addcart = (props) => {
     dispatch({
       type: "addcart",
       payload: props,

      });

          if (localStorage.getItem('items')== null) {
            localStorage.setItem('items','[]');
          }
          var old_data = JSON.parse(localStorage.getItem('items'));
         old_data.push(props);


      localStorage.setItem('items', JSON.stringify(old_data));
      
    
      
      
      
    };
    
    const  { image,title, price, rating,description, category,id } = ProductsData;
 
  return (
     
    <>
    
     { ProductsData? 
       <div className="SelectedProducts-wapper">
          <div className="SelectedProduct">
            <div className="Product-images">
              <div className="images">
                <img src={image} alt="loding.." />
              </div>
            </div>

            <div className="cartSection">
              <div className="productDetaile">
                <div className="Products-title-price">
                  <div className="title">
                    <h2>{title}</h2>
                  </div>
                  <div className="Price">₹ {price}</div>
                  <div className="category">{category}</div>
                 <ReactStars value = {rating?rating.rate:null} isHalf={true} activeColor={'green'} edit={false}/>
                </div>
                <div className="discreption">
                  <h3>Description</h3>
                  {description}
                </div>
             
                <div className="add-cart-btn">
                <Link to={"/cart"}>
                <button className="cartbtn"  onClick={() => {addcart({image,title,price,category,rating,description,quantity:1,id})}}> 
                  Add to cart
                </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
              :<Loding/>    }
      
    </>
  );
}

export default ProductsDetails;
