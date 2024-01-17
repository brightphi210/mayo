import React from 'react'

import './Footer.scss'
import logo from './2-removebg-preview (2).png'

import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerSection'>

        <div className='footerLogo'>
            <img src={logo}alt="" width={100}/>
        </div>

        <div className='footerRight'>
            <div className='footerIconDiv'>
                <Link to={''}><FaLinkedin className='footerIcon'/></Link>
                <Link to={''}><BsTwitterX className='footerIcon'/></Link>
                <Link to={''}><FaInstagram className='footerIcon'/></Link>
            </div>

            <div>
                <p className='help'>Help and support</p>
                <p className='mailFlex'><IoMdMail />mayo@gmail.com</p>
            </div>
        </div>

    </div>
  )
}

export default Footer