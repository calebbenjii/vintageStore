import React from 'react'
import Hero from '../ui/molecules/Hero'
import {Link}  from 'react-router-dom'
import FeaturedProducts from '../ui/organisms/Products/FeaturedProducts'

const Home = () => {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          our products
        </Link>
      </Hero>
      <FeaturedProducts />
    </>
  )
}

export default Home
