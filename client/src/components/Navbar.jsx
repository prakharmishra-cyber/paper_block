import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between bg-blue-800 text-white h-16 items-center shadow-md font-sans">
      <div className="p-2 text-xl tracking-widest cursor-pointer">
        ExamMate
      </div>
      <div className="flex flex-row space-x-2.5 mr-2">
        <div className="p-2 cursor-pointer hover:bg-white hover:text-blue-800">
          Sign Up
        </div>
        <div className="p-2 mr-2 cursor-pointer hover:bg-white hover:text-blue-800">
          Sign In
        </div>
      </div>
    </div>
  )
}

export default Navbar;