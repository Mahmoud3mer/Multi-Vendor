import React from 'react'
import { FaList } from 'react-icons/fa'

export default function Header({showSidebar, setShowSidebar}) {
  return (
    <div className='fixed top-0 left-0 px-2 lg:px-7 py-5 z-40 w-full bg-[#cdcae9]'>
      <div className='bg-[#b1addf] ml-0 lg:ml-[260px] h-[65px] rounded-md px-5 transition-all flex justify-between items-center'>

        <div className='lg:hidden flex w-[35px] cursor-pointer' onClick={() => setShowSidebar(!showSidebar)}>
          <span className='text-2xl text-[#4c4b62]'><FaList/></span>
        </div>

        <div className='hidden md:block'>
          <input type='text' placeholder='Search..' className='bg-transparent outline-none border border-black rounded focus:border-indigo-500 overflow-hidden text-sm py-2 px-2'/>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <div className='flex flex-col items-end'>
            <span className='text-sm font-semibold'>Mahmoud Amer</span>
            <span className='text-xs'>Admin</span>
          </div>
          <div>
            <img src='../../public/images/admin.jpg' className='w-[45px] h-[45px] rounded-full overflow-hidden'/>
          </div>
        </div>
      </div>
    </div>
  )
}
