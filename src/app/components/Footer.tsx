import React from 'react'

const Footer = () => {
    
  return (
    <div className='footer bg-gray-100'>
      <div className='flex justify-around pt-10 pb-28'>
            <div>
                <h6 className=' font-bold'>Company Info</h6>
                <ul className=' mt-6'>
                    <li className=' text-sm text-gray-600'>About Us</li>
                    <li className=' text-sm text-gray-600'>Latest Posts</li>
                    <li className=' text-sm text-gray-600'>Contact Us</li>
                    <li className=' text-sm text-gray-600'>Shop</li>
                </ul>
            </div>

            <div>
                <h6 className=' font-bold'>Help Links</h6>
                <ul className=' mt-6'>
                    <li className=' text-sm text-gray-600'>Tracking</li>
                    <li className=' text-sm text-gray-600'>Order Status</li>
                    <li className=' text-sm text-gray-600'>Delivery</li>
                    <li className=' text-sm text-gray-600'>Shipping Info</li>
                    <li className=' text-sm text-gray-600'>FAQ</li>
                </ul>
            </div>

            <div>
                <h6 className=' font-bold'>USEFUL LINKS</h6>
                <ul className=' mt-6'>
                    <li className=' text-sm text-gray-600'>Special Offer</li>
                    <li className=' text-sm text-gray-600'>Gift Card</li>
                    <li className=' text-sm text-gray-600'>Advertising</li>
                    <li className=' text-sm text-gray-600'>Term Of Use</li>
                </ul>
            </div>

            <div>
                <h6 className=' font-bold'>GET IN THE KNOW</h6>
                <ul className=' mt-6'>
                    <li className=' text-sm text-gray-600'>
                        <input type="text" placeholder='Enter Email' className=' bg-transparent border-b-2 border-gray-300' /> 
                        <span className=' text-md text-gray-400 font-bold'> {'>'}</span>
                    </li>
                    
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Footer
