import React from 'react'
import Navbar from '../Navbar/Navbar'
import img from '../Images/img5.jpg'
import Hero from '../Hero/Hero'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        cName='hero-contact'
        herImg={img}
        title='Contact'
        //text='Choose Your Favourite Destination'
        //url='/'
        btnclass='btncName-contact'
        btntext='Travel Plan'
      />
    </div>
  )
}

export default Contact