import React from 'react'

export default function Contain() {
  return (
    <div className='bg-red-600 flex flex-col justify-center items-center py-10'>
        <div>
            <h1 className='text-center text-2xl text-white font-bold py-3'>Ready to get</h1>
            <p className='text-center text-xl text-gray-300'>Register for exams or try a free mock test </p>
        </div>
        <div className='flex gap-6 mx-auto pt-7'>
            <button type='submit' className='text-xl py-2 px-10 rounded-xl bg-[#364659] text-white cursor-pointer'>Mock Tests</button>
            <button type='submit' className='text-xl py-2 px-10 rounded-xl border-1 border-white bg-red-600 cursor-pointer text-white hover:bg-red-500 hover:text-black'>Sign up free</button>
        </div>
    </div>
  )
}
