import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
          <h2>{title}</h2>
          <p>
            DocBooker is a state-of-the-art facility dedicated to
            providing comprehensive healthcare services with compassion and
            expertise. At
            DocBooker, we prioritize your well-being, ensuriing a harmonius journey
            towards optional halth and wellness.  
          </p>
        </div>
        <div className='banner'>
          <img src={imageUrl} alt="hero" className='animated-image' />
          <span>
             <img src="/Vector.png" alt="vector" />
          </span>
        </div>  
    </div>
  )
}

export default Hero