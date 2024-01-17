import React from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/SectionOne'
import SectionTwo from '../Components/SectionTwo'
import SectionThree from '../Components/SectionThree'
import SectionFour from '../Components/SectionFour'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
    </div>
  )
}

export default Home