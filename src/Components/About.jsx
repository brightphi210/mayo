import React from 'react'
import './About.scss'

import {Link} from 'react-router-dom'

// import imgs from './d.jpg'
// import emi from './as.png'



const AboutCompo = () => {
  return (
    <div className='portfolioSection'>
    <div className='portfolioCard' data-aos="fade-up" data-aos-duration="3000">
      <h2>About Us</h2>
      <p>
        Our code academy teaches students in various programming languages;
      </p>
      <Link to={'/contact'}><button>Contact us</button></Link>
    </div>

    <div className='portfolioGenDiv'>
      <div className='eachportfolio' data-aos="fade-up" data-aos-duration="3000">
        <img src='' alt="" />
      </div>

      <div className='eachportfolio' data-aos="fade-up" data-aos-duration="3000">
        <img src='' alt="" />
        
      </div>
    </div>
  </div>
  )
}

export default AboutCompo