import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import img from '../Images/img2.jpg'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        cName='hero-services'
        herImg={img}
        title='Services'
        //text='Choose Your Favourite Destination'
        //url='/'
        btnclass='btncName-services'
        //btntext='Travel Plan'



        />
    </div>
  )
}

export default Services