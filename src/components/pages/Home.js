import React from 'react'
import Hero from '../ui/molecules/Hero'
import {Link}  from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          our products
        </Link>
      </Hero>
    </>
  )
}

export default Home
