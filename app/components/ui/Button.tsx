import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Button = () => {
  return (
   <div>
    <button className='bg-gray-800 text-white flex rounded-md px-4 py-2 hover:text-black   hover:bg-gray-400 cursor-pointer'>Sign In
              <span className='mt-1 ml-2 bg-white rounded-full text-black'> <FiArrowUpRight
               /></span>
            </button>
   </div>
  )
}

export default Button