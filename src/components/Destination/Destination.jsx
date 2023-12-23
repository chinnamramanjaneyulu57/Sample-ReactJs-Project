import React from 'react'
import img from '../Images/img4.jpg'
import img1 from '../Images/img6.jpg'
import '../Destination/Destination.css'

const Destination = () => {
  return (
    <div className="dest-data">
        <h1>Tours and Travel</h1>
        <p>Whether you’re a data team leader, data engineer.</p>
        <div className='image'>
          <img src={img} alt='imagee'></img>
          <img src={img1} alt='imagee'></img>
        </div>
    </div>
  )
}

export default Destination