import React, { useState } from 'react'
import './SectionFour.scss'
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";


// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();

const SectionFour = () => {


    const [show, setShow] = useState(false)

    const handleShowHide = () => {
        setShow(!show);
    }

  return (
    <div className='sectionFour'>
        <p>TESTIMONIAL</p>
        <h2 className='secFourTwo'>Our Clients Say!</h2>
        <div className='courseDiv'>
            <div className='courseEachDiv' data-aos="fade-up" data-aos-duration="3000">
                <FaHandshakeSimple  className='myIcons'/>
                <h2>Shell</h2>
                <p>Kabo Solutions demonstrated Professionalism and Competence 
                    in handling our SAP Post Implementation Audit Contract.</p>
            </div>

            <div className='courseEachDiv' data-aos="fade-up" data-aos-duration="3000">
                <FaHandshakeSimple  className='myIcons'/>
                <h2>Agip</h2>
                <p>Kabo Solutions demonstrated Professionalism and Competence 
                    in handling our SAP Post Implementation Audit Contract.</p>
            </div>

            <div className='courseEachDiv' data-aos="fade-up" data-aos-duration="3000">
                <FaHandshakeSimple  className='myIcons'/>
                <h2>NiiT</h2>
                <p>Kabo Solutions demonstrated Professionalism and Competence 
                    in handling our SAP Post Implementation Audit Contract.</p>
            </div>
        </div>


        {show && (<>
            
            <div className='courseDiv'>
            <div className='courseEachDiv' data-aos="fade-up" data-aos-duration="3000">
                <FaHandshakeSimple className='myIcons' />
                <h2>PH City</h2>
                <p>Kabo Solutions demonstrated Professionalism and Competence 
                    in handling our SAP Post Implementation Audit Contract.</p>
            </div>

            <div className='courseEachDiv' data-aos="fade-up" data-aos-duration="3000">
                <FaHandshakeSimple  className='myIcons'/>
                <h2>NNPC</h2>
                <p>Kabo Solutions demonstrated Professionalism and Competence 
                    in handling our SAP Post Implementation Audit Contract.</p>
            </div>

            <div className='courseEachDiv' data-aos="fade-up" data-aos-duration="3000">
                <p className='myIcons'><FaHandshakeSimple/></p>
                <h2>Solidity</h2>
                <p>Kabo Solutions demonstrated Professionalism and Competence 
                    in handling our SAP Post Implementation Audit Contract.</p>
            </div>
        </div>
        
        </>)}

        <button onClick={handleShowHide}>{show ? 'Collapse' : 'Show More' } <IoIosSend /></button>
    </div>
  )
}

export default SectionFour