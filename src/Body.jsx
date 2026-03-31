import { BsBook } from "react-icons/bs";
import { LuFileQuestion } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { LuQuote } from "react-icons/lu";

export default function Body() {
  return (
    <main>
        <div className='bg-[#fafcfd] flex justify-evenly list-none py-10'>
            <div className="flex-col items-center">
                <BsBook className="mx-auto text-red-600 w-7 h-7"/>
                <li className='font-bold text-2xl text-center'>0</li>
                <li className=" text-gray-400">Courses</li>
            </div>
            <div>
                <LuFileQuestion className="mx-auto text-red-600 w-7 h-7"/>
                <li className='font-bold text-2xl text-center'>1</li>
                <li className=" text-gray-400">Mock Tests</li>
            </div>
            <div>
                <RxPeople className="mx-auto text-red-600 w-7 h-7"/>
                <li className='font-bold text-2xl text-center'>3</li>
                <li className=" text-gray-400">Students</li>
            </div>
        </div>

        <div className="py-12 px-10">
            <div  className="text-center font-bold text-2xl">
            <h1>What students say</h1>
            </div>
            
            <div className="flex justify-evenly py-5 pt">
                <div className="border-2 border-gray-100 rounded-xl pl-8 pr-35 py-3">
                    <LuQuote className="h-20 w-10 text-gray-500"/>
                    <h1 className=" text-gray-400">Oracle Education Zone helped me crack my <br />entrance exam.</h1>
                    <p className="font-bold">— Priya S.</p>
                </div>
                <div className="border-2 border-gray-100 rounded-xl pl-8 pr-35 py-3">
                    <LuQuote  className="h-20 w-10 text-gray-500"/>
                    <h1 className=" text-gray-400">Structured courses and clear material. <br /> Recommended.</h1>
                    <p className="font-bold">— Rahul K.</p>
                </div>
            </div>
        </div>
    </main>
  )
}
