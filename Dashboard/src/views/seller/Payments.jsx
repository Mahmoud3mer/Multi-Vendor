import React, { forwardRef } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { VariableSizeList as List } from 'react-window';

function handleOnWheel({ deltaY }) {
    console.log("deltaY", deltaY);
}
const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
))

export default function Payments() {

    const Row = ({ index, style }) => {
        return (
            <div style={style} className='flex w-full text-sm text-white'>
                <div className='w-[25%] p-2 whitespace-nowrap'>{index + 1}</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>#26448</div>
                <div className='w-[25%] p-2 whitespace-nowrap flex justify-start items-center'>
                    <p className='bg-[#62d2e1] text-[#487cc0] rounded-md text-center px-1'>pending</p>
                </div>
                <div className='w-[25%] p-2 whitespace-nowrap'>31 Dec 2024</div>
            </div>
        )
    }
    return (
        <div className="px-2 lg:px-7 py-5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full">
                <div className="flex justify-between items-center bg-[#fae8e8] rounded-md p-5 gap-3">
                    <div className="text-[#5c5a5a]">
                        <h1 className="text-lg font-bold">$3434</h1>
                        <span className="text-sm font-medium">Total Sales</span>
                    </div>
                    <div className="bg-[#fa0305] text-white w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl">
                        <span><BsCurrencyDollar /></span>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-[#fde2ff] rounded-md p-5 gap-3">
                    <div className="text-[#5c5a5a]">
                        <h1 className="text-lg font-bold">$2000</h1>
                        <span className="text-sm font-medium">Available Amounts</span>
                    </div>
                    <div className="bg-[#760077] text-white w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl">
                        <span><BsCurrencyDollar /></span>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-[#e9feea] rounded-md p-5 gap-3">
                    <div className="text-[#5c5a5a]">
                        <h1 className="text-lg font-bold">$50</h1>
                        <span className="text-sm font-medium">Withdrawal Amount</span>
                    </div>
                    <div className="bg-[#038000] text-white w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl">
                        <span><BsCurrencyDollar /></span>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-[#ecebff] rounded-md p-5 gap-3">
                    <div className="text-[#5c5a5a]">
                        <h1 className="text-lg font-bold">$0</h1>
                        <span className="text-sm font-medium">Pending Amount</span>
                    </div>
                    <div className="bg-[#0200f8] text-white w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl">
                        <span><BsCurrencyDollar /></span>
                    </div>
                </div>
            </div>

            <div className='w-full my-4 grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='bg-[#6a5fdf] rounded-md p-4'>
                    <h2 className='text-lg text-[#d0d2d6] font-medium'>Send Request</h2>
                    <div className='py-4'>
                        <form className='flex gap-2 pe-8 text-[#d0d2d6]'>
                            <input type="number" placeholder='0' className='bg-transparent w-full outline-none border border-slate-700 focus:border-indigo-600 rounded-md px-3 py-1' />
                            <button type='submit' className='bg-red-600 hover:bg-red-500 px-3 py-1 rounded'>Submit</button>
                        </form>
                    </div>

                    <div className='w-full'>
                        <h2 className='text-lg text-[#d0d2d6] font-medium'>Pending Request</h2>
                        <div className='w-full overflow-x-auto my-3'>
                            <div className='bg-[#a7a3de] rounded-md text-xs font-bold uppercase min-w-[340px] flex text-[#d0d2d6]'>
                                <div className='p-2 w-[25%]'>No</div>
                                <div className='p-2 w-[25%]'>Amount</div>
                                <div className='p-2 w-[25%]'>Status</div>
                                <div className='p-2 w-[25%]'>Date</div>
                            </div>

                            {
                                <List
                                    style={{ minWidth: '340px' }}
                                    height={350}
                                    itemCount={10}
                                    itemSize={(index) => {
                                        return 35
                                    }}
                                    outerElementType={outerElementType}
                                >
                                    {Row}
                                </List>
                            }
                        </div>
                    </div>
                </div>

                <div className='bg-[#6a5fdf] rounded-md p-4'>
                    <div className='w-full'>
                        <h2 className='text-lg text-[#d0d2d6] font-medium'>Success Widrow</h2>
                        <div className='w-full overflow-x-auto my-3'>
                            <div className='bg-[#a7a3de] rounded-md text-xs font-bold uppercase min-w-[340px] flex text-[#d0d2d6]'>
                                <div className='p-2 w-[25%]'>No</div>
                                <div className='p-2 w-[25%]'>Amount</div>
                                <div className='p-2 w-[25%]'>Status</div>
                                <div className='p-2 w-[25%]'>Date</div>
                            </div>

                            {
                                <List
                                    style={{ minWidth: '340px' }}
                                    height={350}
                                    itemCount={10}
                                    itemSize={(index) => {
                                        return 35
                                    }}
                                    outerElementType={outerElementType}
                                >
                                    {Row}
                                </List>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
