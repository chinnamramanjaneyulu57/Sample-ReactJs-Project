import React from 'react'
import './Hero.css'
//import i2 from '../Images/i2.jpg'
export const Hero = (props) => {
  return (
    <div className='props.cName'>
      <img src={props.herImg} alt='heroImg'></img>
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnclass}>{props.btntext}</a>
    </div>
  </div>
  )
}
export default Hero
