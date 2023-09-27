"use client"
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import './style.css'
const Navbar = () => {
  return (
    <div>
      <NavigationMenu className='flex justify-center' >
      <NavigationMenuList className='flex-1 text-blue-700'>
          <NavigationMenuItem>
            Logo
          </NavigationMenuItem>
          
        </NavigationMenuList>


        <NavigationMenuList className='flex-3'>
          <NavigationMenuItem className='nav-link'>
            Item One
          </NavigationMenuItem>
          <NavigationMenuItem> 
            Item Two
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

    </div>
  )
}

export default Navbar
