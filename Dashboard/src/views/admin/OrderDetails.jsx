import React from 'react'
import { useParams } from 'react-router-dom'

export default function OrderDetails() {
    const {orderID} = useParams();
    // console.log(orderID);
    
    return (
        <div className='px-2 lg:px-7 py-5 w-full'>
            <div className='bg-[#6a5fdf] rounded-md p-5 text-[#d0d2d6]'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl'>Order Details</h1>
                    <select name="" id="" className="bg-[#6a5fdf] outline-none border border-[#5c5a5a] hover:border-indigo-500 rounded-md py-2 px-2 text-[#d0d2d6] text-sm cursor-pointer">
                            <option value="Pending">pending</option>
                            <option value="processing">processing</option>
                            <option value="placed">placed</option>
                            <option value="warehouse">warehouse</option>
                            <option value="cancelled">cancelled</option>
                    </select>
                </div>

                <div className='flex flex-col md:flex-row py-7 gap-5 items-center'>
                    <div className='flex flex-col gap-3 w-full md:basis-4/12'>
                        <div className='text-lg'>
                            <p>#2456325 3 dec 2024</p>
                            <h2 className='font-semibold'>Deliver to: <span>Ali Amer</span></h2>
                        </div>
                        <div>
                            <p className='font-light'>2500 ivins Avenue, Egg Harber</p>
                            <p className='text-lg'><span>Payment Status</span> paid</p>
                            <p className='text-lg'>Price: $3566</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-2 bg-[#8088ed] rounded-md'>
                                <img src="http://localhost:5174/images/admin.jpg" className='w-[50px] h-[50px]' alt="" />
                                <div className='py-1 text-lg'>
                                    <p>Long Shirt</p>
                                    <p>Brand: <span>Easy</span> Quantity: <span>6</span></p>
                                </div>
                            </div>
                            
                            <div className='flex gap-2 bg-[#8088ed] rounded-md'>
                                <img src="http://localhost:5174/images/admin.jpg" className='w-[50px] h-[50px]' alt="" />
                                <div className='py-1 text-lg'>
                                    <p>Long Shirt</p>
                                    <p>Brand: <span>Easy</span> Quantity: <span>6</span></p>
                                </div>
                            </div>

                            <div className='flex gap-2 bg-[#8088ed] rounded-md'>
                                <img src="http://localhost:5174/images/admin.jpg" className='w-[50px] h-[50px]' alt="" />
                                <div className='py-1 text-lg'>
                                    <p>Long Shirt</p>
                                    <p>Brand: <span>Easy</span> Quantity: <span>6</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:basis-8/12 h-fit flex flex-col gap-6 p-6 bg-[#8088ed] rounded-md'>
                        <div className='flex flex-col gap-1'>
                            <p>Seller 1 Order: pending</p>
                            <div className='flex gap-2 items-center'>
                                <img src="http://localhost:5174/images/admin.jpg" className='w-[50px] h-[50px]' alt="" />
                                <div className='py-1'>
                                    <p>Long Shirt</p>
                                    <p>Brand: <span>Easy</span> Quantity: <span>6</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p>Seller 1 Order: pending</p>
                            <div className='flex gap-2 items-center'>
                                <img src="http://localhost:5174/images/admin.jpg" className='w-[50px] h-[50px]' alt="" />
                                <div className='py-1'>
                                    <p>Long Shirt</p>
                                    <p>Brand: <span>Easy</span> Quantity: <span>6</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
