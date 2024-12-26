import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react'

export default function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    // <div className='bg-[#cdcae9] h-screen w-screen grid grid-cols-12 grid-rows-12 gap-4'>
    //   <div className='col-span-2 row-span-12'>
    //     <Sidebar/>
    //   </div>
    //   <div className='bg-red-300 col-span-10 row-span-1'>
    //     <Header/>
    //   </div>
    //   <div className='bg-blue-600 col-span-10 row-span-11'>
    //     <Outlet/>
    //   </div>
    // </div>

    <div className='bg-[#cdcae9] h-screen w-screen'>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        
      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all'>
        <Outlet/>
      </div>

    </div>
  )
}
