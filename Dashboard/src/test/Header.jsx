import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoEarth } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../store/Reducers/languageSlice';
export default function Header({lang}) {
    const [showSidebar, setShowSidebar] = useState(false);
    const translation = useSelector(state => state.lang.translation);
    const dispatch = useDispatch();
    
    const changeLang = () => {
        dispatch(changeLanguage(lang === 'en' ? 'ar' : 'en'));
    }
    return (
        <nav className='py-[16px]'>
            <div className='mx-[70px] px-[12px] flex justify-between items-center'>
                <div className='flex-1'>
                    <img src='../../public/imgsForTest/logo.svg' alt="" className='h-[50px] object-contain' />
                </div>
                <div className='flex-[3] hidden lg:block'>
                    <ul className='flex justify-center items-center transition-all duration-300'>
                        <li className='px-[16px] text-[16px]'>
                            <Link>{translation.home}</Link>
                        </li>
                        <li className='px-[16px] text-[16px]'>
                            <Link>{translation.about_us}</Link>
                        </li>
                        <li className='px-[16px] text-[16px]'>
                            <Link>{translation.services}</Link>
                        </li>
                        <li className='px-[16px] text-[16px]'>
                            <Link>{translation.projects}</Link>
                        </li>
                        <li className='px-[16px] text-[16px]'>
                            <Link>{translation.contact_us}</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex-1 flex justify-end gap-[12px]'>
                    <button onClick={() => changeLang()}>
                        <span className='h-[38px] w-[38px] rounded-full border border-slate-800 flex justify-center items-center'>
                            <IoEarth />
                        </span>
                    </button>

                    <button className='lg:hidden block group hover:text-white' onClick={() => setShowSidebar(!showSidebar)}>
                            <div className='relative overflow-hidden h-[38px] w-[38px] rounded-full border border-slate-800 flex justify-center items-center'>
                                <span>
                                    <IoMdMenu />
                                </span>
                                <span className='absolute  group-hover:bg-black group-hover:bottom-0 left-0 bottom-[-100px] duration-300 h-[38px] w-[38px] rounded-full -z-50'></span>
                            </div>
                    </button>
                </div>

            </div>

            {/* Sidebar */}
            {
                showSidebar &&
                <div className='w-screen h-[100dvh] overflow-hidden pt-[16px] fixed top-0 left-0 z-40 bg-[#fff] flex flex-col gap-[25px]'>
                    <div className='flex justify-between items-center mb-[36px] px-[32px]'>
                        <div className=''>
                            <img src='../../public/imgsForTest/logo.svg' alt="" className='h-[50px] object-contain' />
                        </div>
                        <button className='group hover:text-white' onClick={() => setShowSidebar(false)}>
                            <div className='relative overflow-hidden h-[38px] w-[38px] rounded-full border border-slate-800 flex justify-center items-center'>
                                <span>
                                    <IoMdClose />
                                </span>
                                <span className='absolute  group-hover:bg-black group-hover:bottom-0 left-0 bottom-[-100px] duration-300 h-[38px] w-[38px] rounded-full -z-50'></span>
                            </div>
                        </button>
                    </div>
                    <div>
                        <ul className='flex flex-col justify-center items-start gap-[25px]  transition-all duration-300'>
                            <li className='px-[32px] text-[20px]'>
                                <Link>Home</Link>
                            </li>
                            <li className='px-[32px] text-[20px]'>
                                <Link>About Us</Link>
                            </li>
                            <li className='px-[32px] text-[20px]'>
                                <Link>Service</Link>
                            </li>
                            <li className='px-[32px] text-[20px]'>
                                <Link>Projects</Link>
                            </li>
                            <li className='px-[32px] text-[20px]'>
                                <Link>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </nav>
    )
}
