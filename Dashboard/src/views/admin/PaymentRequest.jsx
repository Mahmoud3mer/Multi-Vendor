import React , { forwardRef } from 'react'
import { VariableSizeList as List } from 'react-window';

function handleOnWheel({ deltaY }){
    console.log("deltaY", deltaY);
}
const outerElementType = forwardRef((props,ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
))

export default function PaymentRequest() {
    const array = [1,2,3,4,5,6,7,8,9,10];
    const Row = ({index,style}) => {
        return(
            <div style={style} className='flex w-full text-sm text-white'>
                <div className='w-[25%] p-2 whitespace-nowrap'>{index + 1}</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>#26448</div>
                <div className='w-[25%] p-2 whitespace-nowrap flex justify-start items-center'>
                    <p className='bg-[#62d2e1] text-[#487cc0] rounded-md text-center px-1'>pending</p>
                </div>
                <div className='w-[25%] p-2 whitespace-nowrap'>31 Dec 2024</div>
                <div className='w-[25%] p-2 whitespace-nowrap flex justify-start items-center'>
                    <button className='bg-[#594dd6] text-white rounded-sm px-2 py-1'>Confirm</button>
                </div>
            </div>
        )
    }
    return (
        <div className='px-2 lg:px-7 py-5 w-full'>
            <div className='bg-[#6a5fdf] p-4 rounded-md'>
                <h1 className='text-xl text-[#d0d2d6] pb-5'>Withdrawal Request</h1>
                <div className='w-full'>
                    <div className='w-full overflow-x-auto'>
                        <div className='bg-[#a7a3de] rounded-md text-xs font-bold uppercase min-w-[340px] flex'>
                            <div className='p-2 w-[25%]'>No</div>
                            <div className='p-2 w-[25%]'>Amount</div>
                            <div className='p-2 w-[25%]'>Status</div>
                            <div className='p-2 w-[25%]'>Date</div>
                            <div className='p-2 w-[25%]'>Action</div>
                        </div>

                        {
                            <List
                                style={{minWidth: '340px'}}
                                className="List"
                                height={350}
                                itemCount={20}
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
    )
}
