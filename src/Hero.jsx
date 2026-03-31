import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col justify-center items-center bg-black/20 py-30' style={{
      backgroundImage:"url('https://static.vecteezy.com/system/resources/thumbnails/047/079/887/small_2x/blue-sea-water-background-photo.jpg')",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      height:"full",
      
    }}>

      {/* content paragraph */}
        <div className='mb-7'>
            <h1 className='text-center text-5xl font-bold py-3'>Your path to success starts here</h1>
            <p className='text-center text-xl text-gray-500'>Courses, mock tests, and exam registration for Medical, Engineering, and Paramedical. </p>
        </div >
      {/* button in hero section */}
        <div className='flex gap-6 mx-auto pt-7'>
            <button type='submit' className='text-xl py-2 px-10 rounded-xl bg-red-500 text-white cursor-pointer'>Browse Course</button>
            <button type='submit' className='text-xl py-2 px-10 rounded-xl bg-white cursor-pointer hover:bg-gray-100'>Free Mock Tests</button>
        </div>
    </div>
  )
}
