import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex gap-5 justify-between items-center bg-gray-900 py-4 px-6 cursor-pointer'>
        {/* logo section */}
        <div>
            <img src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_auto/vista-logos-pages/en-US/logomaker-gen-ai/logo-gallery/logo-9" alt="Logo image" className='w-14 h-14 rounded-full'/>
        </div>
        {/* section2: nav elements */}
        <div className='flex gap-6 text-xm text-white list-none'>
            <li className='text-red-500 hover:text-red-700'>Home</li>
            <li className=' hover:text-red-700'>About us</li>
            <li className=' hover:text-red-700'>Contact</li>
            <li className=' hover:text-red-700'>Service</li>
        </div>
        {/* login section */}
        <div className='flex gap-6 text-xm text-gray-500 list-none items-center'>
            <li className='text-white  hover:bg-gray-400 rounded-xl px-2 py-1'>Login</li>
            <li className=' hover:bg-red-700 bg-red-500 text-white rounded-xl py-1 px-2'>Sign up</li>
        </div> 
    </nav>
  )
}

export default Navbar