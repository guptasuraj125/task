import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

type Buttonp = {
  text: string
}
const Button: React.FC<Buttonp> = ({text}) => {
  return (
   <div>
    <button className='bg-gray-800 text-white flex rounded-md px-4 py-2 hover:text-black   hover:bg-gray-400 cursor-pointer'>
      {text}
             
            </button>
   </div>
  )
}

export default Button