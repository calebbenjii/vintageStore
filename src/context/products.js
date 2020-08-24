import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import url from '../utils/URL'
import {featuredProduct} from '../utils/helpers'

export const ProductContext = createContext();

//Provider, Consumer, useContext()

const ProductProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);
    
    useEffect(()=> {
      setLoading(true)
      // fetching data
      axios.get(`${url}/products`).then(response => {
        const featured = featuredProduct(response.data);
        console.log(response.data)
        setProducts(response.data);
        setFeatured(featured);
        setLoading(false);
      })
      return () => {}
    }, []); 

  return (
    <ProductContext.Provider value={{loading, products, featured}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
