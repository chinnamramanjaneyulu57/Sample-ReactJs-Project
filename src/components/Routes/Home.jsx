import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import img from '../Images/img1.jpg'
import Destination from '../Destination/Destination'
const Home = () => {
  return (
      <div>
        <Navbar />
        <Hero
        cName='hero'
        herImg={img}
        title='Your Journey Your Story!!'
        text='Choose Your Favourite Destination'
        url='/'
        btnclass='btncName'
        btntext='Travel Plan'



        />
        <Destination/>
      </div>
    
  )
}

export default Home