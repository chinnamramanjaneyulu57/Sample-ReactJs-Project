import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import i3 from '../Images/img3.jpg'

const About = () => {
  return (
      <div>
        <Navbar/>
        <Hero
        cName='hero-about'
        herImg={i3}
        title='About'
        //text='Choose Your Favourite Destination'
        //url='/'
        btnclass='btncName-about'
        //btntext='Travel Plan'
        
        />
      </div>
  )
}

export default About