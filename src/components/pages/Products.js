import React, {useContext} from 'react'; 
import {ProductContext} from '../../context/products';
import Loading from '../../components/ui/molecules/Loading'
import ProductList from '../../components/ui/organisms/Products/ProductList';

const Products = () => {
  const {loading, products} = useContext(ProductContext);
  // console.log(products)
 if(loading) {
   return <Loading />
 }
 return <ProductList title="Our Products" products={products} />
}

export default Products
