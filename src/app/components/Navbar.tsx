"use client"
import React from 'react'
import './style.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="border-gray-200 mb-10 bg-transparent sticky z-50">
      <div className="w-full mx-auto p-8">
        <div className="mx-2 flex flex-wrap items-center justify-between">
          <Link href="#" className="flex">
            Logo
          </Link>
          
          <div className="hidden md:flex justify-between items-end w-full md:w-auto md:order-1" id="mobile-menu-3">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="#"
                  className="text-green-800"
                  aria-current="page">HOME</Link>
              </li>
              <li>
                <Link href="#"
                  className="text-green-800"
                  >SHOP</Link>
              </li>
              <li>
                <Link href="#"
                  className="text-green-800">FEATURES</Link>            </li>
              <li>
                <Link href="#"
                  className="text-green-800">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex justify-between items-end w-full md:w-auto md:order-1" id="mobile-menu-3">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
              <button>Login</button>
              </li>
              {/* <li>
                <Link href="#"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">SHOP</Link>
              </li> */}
              
            </ul>
          </div>
        </div>
      </div>
      
    </nav>

  )
}

export default Navbar
