import React from 'react'

const Hero = ({children}) => {
  return (
    <div className="hero">
      <div className="banner">
        <h2>Buy Smart over 80% Off</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        {children}
      </div>
    </div>
  )
}

export default Hero
