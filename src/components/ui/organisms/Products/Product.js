import React from 'react'; 
import {Link} from 'react-router-dom'
// import ButtonBtn from '../../molecules/Button'

const Product = ({id, image, title, price}) => {
  let url = image.url
  return (
    <article className='product'>
      <div className="img-container">
        <img src={url} alt={title} />
        <Link to={`products/${id}`} className="btn btn-primary product-link">details</Link>
      </div>
      <div className="product-footer">
        <p className="product-title" >{title}</p>
        <p className="product-price" >${price}</p>
        {/* <ButtonBtn titleBtn="Buy Now!!" /> */}
      </div>
    </article>
  )
}

export default Product
