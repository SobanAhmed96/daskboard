import React from 'react'
import logo from "../../public/logo.png"
import { CiBrightnessUp } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className='flex justify-between px-6 bg-[#F9FBFE] border-b border-0 border-gray-200'>
        <div className="flex justify-center items-center">
        <div className='w-25 h-25'>
            <img src={logo} alt="Logo" />
        </div>
        <div>
            <h1 className='text-2xl font-bold'>Product dashboard</h1>
            <p className='font-light'>Manage Your Product Easily</p>
        </div>
        </div>
        <div className="flex items-center">
<CiBrightnessUp size={26} />
        </div>
    </div>
  )
}

export default Navbar