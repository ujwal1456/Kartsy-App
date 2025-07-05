import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Kartsy is your one-stop destination for the latest fashion trends. We’re committed to quality, style, and customer satisfaction — delivering elegance to your doorstep.
            </p>
        </div>

        <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li> 
                </ul>   
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+040-825-372-2291</li>
                <li>contact@kartsy.com</li>
            </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>&copy; Copyright {new Date().getFullYear()}@ kartsy.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
