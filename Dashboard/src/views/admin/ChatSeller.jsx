import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaList } from 'react-icons/fa';

export default function ChatSeller() {
  const [show, setShow] = useState(false);
  const sellerId = 22;

  return (
    <div className='px-2 lg:px-7 py-5 w-full'>
      <div className='w-full bg-[#6a5fdf] rounded-md p-4 h-[calc(100vh-140px)]'>
        <div className='w-full h-full flex relative'>
          <div className={`h-full w-[280px] rounded-md absolute z-40 ${show ? '-left-[16px]' : '-left-[336px]'} transition-all md:relative md:left-0`}>
            <div className='w-full h-[calc(100vh-177px)] bg-[#9e97e9] md:bg-transparent overflow-y-auto'>
              <div className='flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white'>
                <h2>Sellers</h2>
                <span className='block cursor-pointer md:hidden' onClick={() => setShow(!show)}><IoMdClose /> </span>
              </div>

              <div className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 cursor-pointer bg-[#8288ed] rounded-md`}>
                <div className='relative'>
                  <img className='w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full' src="http://localhost:5173/images/admin.jpg" alt="" />
                  <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                </div>
                <div className='flex justify-center items-start flex-col w-full'>
                  <div className='flex justify-between items-center w-full'>
                    <h2 className='text-base font-semibold'>Kazi Ariyan</h2>
                  </div>
                </div>
              </div>

              <div className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}>
                <div className='relative'>
                  <img className='w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full' src="http://localhost:5173/images/admin.jpg" alt="" />
                  <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                </div>
                <div className='flex justify-center items-start flex-col w-full'>
                  <div className='flex justify-between items-center w-full'>
                    <h2 className='text-base font-semibold'>Anas Mustafa</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full md:w-[calc(100%-200px)] lg:pl-4'>
            <div className='flex justify-between items-center'>
              {
                sellerId && <div className='flex justify-start items-center gap-3'>
                  <div className='relative'>
                    <img src="../../../public/images/seller.png" className='w-[45px] h-[45px] p-[2px] rounded-full border-2 border-green-600' alt="" />
                    <div className='w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0'></div>
                  </div>
                </div>
              }

              <div onClick={() => setShow(!show)} className='w-[35px] h-[35px] rounded-sm md:hidden bg-blue-500 text-white flex justify-center items-center shadow shadow-indigo-500 hover:shadow-indigo-500/50 cursor-pointer'>
                <span><FaList /></span>
              </div>
            </div>

            <div className='py-4 w-full'>
              <div className='w-full h-[calc(100vh-290px)] rounded-md text-white p-3 overflow-y-auto bg-[#475569]'>
                <div className='w-full flex justify-start items-center'>
                  <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                    <div>
                      <img className='w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]' src="http://localhost:5174/images/demo.jpg" alt="" />
                    </div>
                    <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm'>
                      <span>How Are you ? </span>
                    </div>
                  </div>
                </div>
                <div className='w-full flex justify-end items-center'>
                  <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>

                    <div className='flex justify-center items-start flex-col w-full bg-red-500 shadow-lg shadow-red-500/50 text-white py-1 px-2 rounded-sm'>
                      <span>How Are you ? </span>
                    </div>
                    <div>
                      <img className='w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]' src="http://localhost:5174/images/admin.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className='w-full flex justify-start items-center'>
                  <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                    <div>
                      <img className='w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]' src="http://localhost:5174/images/demo.jpg" alt="" />
                    </div>
                    <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm'>
                      <span>I Need some help </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className='text-white flex gap-3'>
              <input type="text" placeholder='Input your message' className='w-full bg-[transparent] outline-none rounded-md border border-slate-700 px-3 py-[5px] focus:border-blue-500' />
              <button type='submit' className='bg-[#06b6d4] shadow-lg shadow-cyan-500/50 font-semibold w-[75px] h-[35px] rounded-md'>Send</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
