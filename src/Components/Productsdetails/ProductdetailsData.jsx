import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsDetails from './ProductsDetails';

const ProductdetailsData = () => {

    const [first, setfirst] = useState('');
    const { ProductId } = useParams();
    
    const fetchData = async () => {
      
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${ProductId}`);
        const data = await res.json();
        setfirst(data);
      } catch (error) {}
    };
    
    useEffect(() => {
      fetchData();
    },[]);
  return (
    <>
    <ProductsDetails ProductsData={first} />
    
    </>
  )
}

export default ProductdetailsData