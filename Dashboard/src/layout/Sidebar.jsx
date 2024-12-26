import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import getNav from '../navigation';
import { CgLogOut } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

export default function Sidebar({showSidebar, setShowSidebar}) {
  const [allNav, setAllNav] = useState([]);
  const {pathname} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const navs = getNav('admin');
    setAllNav(navs);
  }, [])

  // console.log(allNav);
  // console.log(pathname);
  
  const logout = () => {

  }

  return (
    <div>

      <div className={`${!showSidebar? 'invisible' : 'visible'} w-screen h-screen bg-[#96c6f080] fixed top-0 left-0 z-10 duration-200`} onClick={() => setShowSidebar(false)}>
      </div>

      <div className={`bg-[#e6e7fb] shadow-[0_0_15px_0_rgb(34_41_37_/_5%)] w-[260px] fixed top-0 z-50 transition-all h-screen ${showSidebar? 'left-0' : '-left-[260px] lg:left-0'}`}>
        <div className='h-[70px] flex justify-center items-center'>
          <Link to={'/'} className='w-[170px] h-[50px]'>
            <img src="../../public/images/logo.png" alt="logo" className='w-full h-full'/>
          </Link>
        </div>

        <div className=''>
          <ul>
            {
              allNav.map((nav, index) =>
              <li key={nav.id} className={`${pathname === nav.path && 'bg-blue-500 text-white shadow-indigo-500/50 duration-500'} px-4 py-2 mx-4 flex items-center gap-2 rounded font-semibold hover:pl-5 transition-all duration-200`}>{nav.icon}<Link to={nav.path}>{nav.title}</Link></li>
              )
            }

            <li>
                <button
                  className="px-4 py-2 mx-4 flex items-center gap-2 rounded font-semibold hover:pl-5 transition-all duration-200"
                  onClick={logout}
                >
                  <span><CgLogOut/></span>
                  <span>Logout</span>
                </button>
            </li>
          </ul>
        </div>

        <button className='absolute top-1/2 right-[10px] visible lg:invisible bg-indigo-600 text-white w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl transition-all duration-200 hover:scale-105 hover:pe-1' onClick={() => setShowSidebar(false)}>
            <span><FaArrowLeft/></span>
        </button>
      </div>
    </div>
  )
}
