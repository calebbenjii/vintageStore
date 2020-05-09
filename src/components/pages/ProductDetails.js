import React from 'react'
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams();
  return (
   
      <h2>Hello from ProductDetails page id is : {id} </h2>
    
  )
}

export default ProductDetails
