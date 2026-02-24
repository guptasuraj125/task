import React from 'react'

import Button from '../ui/Button'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='flex items-center justify-evenly  mt-5'>
        <h1 className='text-gray-600 font-extrabold text-3xl'>Logo</h1>


        <ul className='flex gap-10'>
            <li className='hover:text-blue-300 cursor-pointer '>Home</li>
            <li  className='hover:text-blue-300  cursor-pointer' >About us</li>
            <li className='hover:text-blue-300 cursor-pointer ' >Services</li>
            <li className='hover:text-blue-300  cursor-pointer' >Contact Us</li>


        </ul>
       <Link href="/login">
        <Button/>
       </Link>
    </div>
  )
}

export default Navbar