import React from 'react'
import { useParams } from 'react-router-dom'

export default function SellerDetails() {
    const { sellerID } = useParams();
    console.log(sellerID);
    
    return (
        <div className="px-2 lg:px-7 py-5 w-full">
            <h1 className="text-xl font-bold mb-3 text-slate-700">Sellers Details</h1>
            <div className="bg-[#6a5fdf] rounded-md p-4">
                <div className='flex gap-10 flex-col lg:flex-row justify-center'>
                    <div className='basis-3/12 px-5 py-7 flex justify-center items-center'>
                        <img src="http://localhost:5173/images/admin.jpg" className='w-[220px]' alt="" />
                    </div>
                    <div className='basis-4/12'>
                        <h2 className='text-[#d0d2d6] mb-2 font-medium'>Basic Info</h2>
                        <div className='bg-[#9e97e9] p-4 rounded-md font-bold text-xs space-y-3'>
                            <p>Name: <span>Mahmoud Amer</span></p>
                            <p>Email: <span>Mahmoud@gmial.com</span></p>
                            <p>Role: <span>Seller</span></p>
                            <p>Status: <span>Active</span></p>
                            <p>Payment Status: <span>Active</span></p>
                        </div>
                    </div>

                    <div className='basis-4/12'>
                        <h2 className='text-[#d0d2d6] mb-2 font-medium'>Address</h2>
                        <div className='bg-[#9e97e9] p-4 rounded-md font-bold text-xs space-y-3'>
                            <p>Shop Name: <span>Easy Shop</span></p>
                            <p>Division: <span>Dhaka</span></p>
                            <p>District: <span>Dhaka</span></p>
                            <p>State: <span>Dhaka</span></p>
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <form>
                        <select name="status" id="status" className="bg-[#6a5fdf] outline-none border border-[#5c5a5a] rounded-md w-[200px] py-2 px-2 text-[#d0d2d6] text-sm cursor-pointer">
                            <option value="Active">--Select Status--</option>
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                        </select>
                        <button type='submit' className='bg-red-600 px-5 py-2 shadow-md shadow-indigo-300/5 text-white rounded w-[200px] ms-4'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
