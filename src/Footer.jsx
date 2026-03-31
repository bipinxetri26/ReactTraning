import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
export default function () {
  return (
        <footer className='bg-[#364659]'>
    <div className='flex justify-between py-9 text-white px-5'>
        <div>
            <img src="	https://www.oracleeducation.edu.np/_next/image?url=%2Foerlogo.png&w=384&q=75" alt="" className='h-40 w-40'/>
            <p className='font-bold'>Your path to success. Courses,mock <br />tests, and exam registration for Medical,<br /> Engineering, and Paramedical streams.</p>
        </div>
        <div className='list-none flex-col  '>
            <li className='font-bold'>Quick Links </li>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Courses</li>
            <li className="cursor-pointer">Mock Tests</li>
            <li className="cursor-pointer">Contact</li>
        </div>
        <div className='list-none '>
            <li className='font-bold'> Contact </li>
            <li className="flex items-center gap-2 cursor-pointer"> <MdOutlineMail />bipinxetri26@gmail.com</li>
            <li className="flex items-center gap-2 cursor-pointer"> <IoCallOutline />9800000000</li>
            <li className="flex items-center gap-2 cursor-pointer"> <IoLocationOutline />Butwal</li>
            
        </div>
        <div className='list-none flex-col '>
            <li className='font-bold'>Resources </li>
            <li className="cursor-pointer">Privacy</li>
            <li className="cursor-pointer">Terms of Use</li>
            <li className="cursor-pointer">Need help? Get in touch.<hr /></li>
            
        </div>

    </div>
    <hr className='text-white'/>
    <div className='text-white flex justify-between pt-4 pb-10 px-3'>
    <div>
        © 2026 Oracle Education Zone. All rights reserved.
    </div>
    <div className='flex gap-5'>
        <a href="">Privacy</a>
        <a href="">Terms of Use</a>
    </div>
    </div>
    </footer>
  )
}
