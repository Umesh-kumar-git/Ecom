import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ProductCard from "../ProductCard/ProductCard";
import 'react-toastify/dist/ReactToastify.css';
import HeroSection from "../heroSection/HeroSection";
import "./home.css"




const Home = () => {
  const [Products, setProducts] = useState([]);

  const fecthProducts = async () => {


 try {
  
   const res = await fetch(`https://fakestoreapi.com/products`);
   const data = await res.json();
   setProducts(data);
 } 
  catch (error) {
   
    toast.error ('fatch not conneected' )
  
   
 }
  };


  useEffect(() => {
    fecthProducts();
  }, []);
 console.log(Products);
  return (
    <>
  
    <HeroSection/>
 
        <div className="banner"><h2>Products</h2></div>
      <div className="wapper" >
      {Products && Products.map((Product)=>{
        
        return( <ProductCard key={Product.id} Products={Product} />)
      })
      }
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
