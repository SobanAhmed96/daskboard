import React from 'react'
import logo from "../../public/logo.png"
const Navbar = () => {
  return (
    <div className='flex  '>
        <div className="flex justify-center items-center gap-4">
        <div className='w-25 h-25'>
            <img src={logo} alt="Logo" />
        </div>
        <div>
            <h1>Product dashboard</h1>
            <h1></h1>
        </div>
        </div>
        <div></div>
    </div>
  )
}

export default Navbar