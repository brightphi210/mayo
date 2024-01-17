import React from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/SectionOne'
import SectionTwo from '../Components/SectionTwo'
import SectionThree from '../Components/SectionThree'
import SectionFour from '../Components/SectionFour'

const Home = () => {
  return (
    <div>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
    </div>
  )
}

export default Home