import React from 'react'

const ProductOffer = () => {
  return (
    <div className='product-offer container my-10'>
      <div className='flex flex-wrap justify-around px-12'>
        <div className=' w-7/12 bg-black text-white text-center h-full '>
          <div className='content-1 my-24'>
            <h1 className=' text-2xl'> PEACE OF MIND</h1>
            <br />
            <p>A one-stop platform for all your fashion needs,
              <br /> hassle-free. Buy with a peace of mind.</p>
            <br />
            <button className=' w-24 bg-white text-blue-700 h-8 text-sm'>BUY NOW</button>
          </div>
        </div>
        <div className=' w-4/12  bg-black text-white text-center  h-full '>
          <div className='content-1 my-24'>
            <h1 className=' text-2xl'>BUY 2 GET 1 FREE</h1>
            <br />
            <p>End of season sale. Buy any 2 items of your choice and get 1 free.</p>
            <br />
            <button className=' w-24 bg-white text-blue-700 h-8 text-sm'>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOffer
