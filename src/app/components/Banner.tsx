import React from 'react'
import './style.css'
const Banner = () => {
  return (
    <div className='Banner banner-bg-img'>
      <div className='context-box flex justify-center absolute top-64 right-32'>
        <div className='banner-context text-center'>
          <h1 className='text-center text-3xl font-bold text-white'>STYLIST PICKS BEAT</h1>
          <h1 className='text-center text-3xl font-bold text-white'>THE HEAT</h1>
          <br />
          <button className='text-white bg-transparent border-solid border-4 border-white text-sm h-8 w-32'>SHOP NOW</button>
        </div>
      </div>


    </div>
  )
}

export default Banner
