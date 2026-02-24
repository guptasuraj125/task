'use client'
import { useRouter } from 'next/navigation'

import { FiArrowLeft } from 'react-icons/fi'

const page = () => {

   const router = useRouter()
const handleBack =() =>{
 router.back()
  
}

  return (
    <div>
     <div onClick={handleBack} className='mt-30 cursor-pointer ml-30  text-3xl '>  <  FiArrowLeft /></div>
      <img className='px-80 py-10' src="/login.png" alt="" />

         

    </div>
  )
}

export default page