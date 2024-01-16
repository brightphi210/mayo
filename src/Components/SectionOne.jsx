import React from 'react'

import { Link } from 'react-router-dom'

import './SectionOne.scss'



const SectionOne = () => {
  return (
    <div className='headerSec'>
        <div className='headerText' data-aos="fade-up" data-aos-duration="3000">
                <h2>
                Simplify business processes <br /> with our ERP system
                </h2>
                <p>Integrate daily business tasks for a more <br /> efficient enterprise resource planning system.</p>
                <Link to={'/contact'}><button>Book Session</button></Link>
        </div>
    </div>
  )
}

export default SectionOne