import React from 'react'

import Button from '../ui/Button'
import Link from 'next/link'


const Navbar = () => {

  return (
    <div className='flex top-0 left-0 sticky bg-gray-50 items-center justify-evenly   py-4'>
        <h1 className='text-gray-600 font-extrabold text-3xl'>Logo</h1>


        <ul className='flex gap-10'>
            <li className='hover:text-blue-300 cursor-pointer '><a href="#home">Home</a></li>
            <li  className='hover:text-blue-300  cursor-pointer' ><a href="#pricing">Pricing</a></li>
            <li className='hover:text-blue-300 cursor-pointer ' ><a href="#footer">Footer</a></li>
            <li className='hover:text-blue-300  cursor-pointer' >Contact Us</li>


        </ul>
       <Link href="/login">
        <Button text='Login'/>
       </Link>
    </div>
  )
}

export default Navbar