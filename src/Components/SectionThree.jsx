import React from 'react'


import './SectionTwo.scss'
import trust from './trust.jpg'

// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();


const SectionThree = () => {
  return (
    <div>
        <div className='sectionTwo'>
            <div className='sectionTwoFlex'>


                <div className='weDiv right3' data-aos="fade-up" data-aos-duration="3000">
                    <h2>We Are A Trusted SAP Gold Partner</h2>
                    <div className='right3Div'>
                        <h3>Worldwide Consulting Resources</h3>
                        <p>Our Services Providers are sourced from the very best consultants in the world</p>
                    </div>

                    <div className='right3Div'>
                        <h3>On Time Project Delivery</h3>
                        <p>We have a reputation for always delivering on our projects on time and within the project budget</p>
                    </div>

                    <div className='right3Div'>
                        <h3>Most Reliable Support Services</h3>
                        <p>Companies Across AfricaWe ensure that your SAP System continues to run as expected with no risk to your business continuity</p>
                    </div>

                </div>

                <div className='weDiv' data-aos="fade-up" data-aos-duration="3000">
                    <img src={trust} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionThree