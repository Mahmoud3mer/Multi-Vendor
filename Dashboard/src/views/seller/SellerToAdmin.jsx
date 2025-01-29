import React from 'react'

const SellerToAdmin = () => {
    return (
        <div className='px-2 lg:px-7 py-5 w-full'>
            <div className='w-full bg-[#6a5fdf] rounded-md p-4 h-[calc(100vh-140px)]'>
                <div className='w-full h-full flex relative'>
                    <div className='w-full lg:pl-4'>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-start items-center gap-3'>
                                <div className='relative'>
                                    <img src="../../../public/images/seller.png" className='w-[45px] h-[45px] p-[2px] rounded-full border-2 border-green-600' alt="" />
                                    <div className='w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0'></div>
                                </div>
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

export default SellerToAdmin;
