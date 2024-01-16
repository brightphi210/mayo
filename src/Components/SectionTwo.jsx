import React from 'react'


import './SectionTwo.scss'

// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();


const SectionTwo = () => {
  return (
    <div>
        <div className='sectionTwo'>
            <div className='sectionTwoFlex'>
                <div className='weDiv' data-aos="fade-up" data-aos-duration="3000">
                    <h2>#1 Place For All Of Your SAP Expertise Request</h2>
                    <p>
                        The rare SAP consulting skills from our Senior 
                        SAP Consultants can be of much benefit to your 
                        business. Our speciality is completing large-scale 
                        SAP Projects, Rollout, Extensions, and Integration with
                        success.
                    </p>
                    
                    <div>
                        <span>Call for any enquiry!</span>
                        <h3>+234 (802) 216-0093</h3>
                    </div>
                </div>

                <div className='weDiv right' data-aos="fade-up" data-aos-duration="3000">
                    <div className='webOne'>
                        <h3>14 Years</h3>
                        <p>Of Excellent Services</p>
                    </div>

                    <div className='webTwo'>
                        <h3>Over 10,000</h3>
                        <p>Happy End-Users</p>
                    </div>

                    <div className='webThree'>
                        <h3>More Than 30</h3>
                        <p>Companies Across Africa</p>
                    </div>

                    <div className='webFour'>
                        <h3>128,000 +</h3>
                        <p>Support Tickets Closed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo