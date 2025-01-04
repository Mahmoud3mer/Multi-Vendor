import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react'

export default function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (


    <div className='bg-[#cdcae9] h-screen w-screen overflow-x-auto'>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        
      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all'>
        <Outlet/>
      </div>

    </div>
  )
}
