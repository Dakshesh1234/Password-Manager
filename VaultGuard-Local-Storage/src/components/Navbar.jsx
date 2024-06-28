import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14 ">
        <div className="logo font-bold text-2xl">
          <span className="text-blue-800"> &lt;</span>
          <span>Vault</span>
          <span className="text-blue-800">Guard/&gt;</span>
        </div>
        <button className='text-wite bg-blue-800 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
          <img className='invert w-10 p-1' src="/icons/github.svg" alt="github logo" />
          <a target='_blank' href="https://github.com/Dakshesh1234">
            <span className='font-bold px-2'>Github</span>
          </a>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
