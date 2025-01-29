import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { FaImages } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const Profile = () => {
    const image = false;
    const loader = false;
    const [selectedImage, setSelectedImage] = useState('');
    const [showEditAddress, setShowEditAddress] = useState(false)

    const handelImgSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className='px-2 lg:px-7 py-5 w-full'>
            <div className='flex flex-col md:flex-row gap-4 w-full'>
                <div className='bg-[#6a5fdf] p-7 rounded-md basis-full md:basis-6/12 flex flex-col gap-5'>
                    <div className='flex justify-center'>
                        {
                            image ?
                                <label htmlFor=''></label> :
                                <label htmlFor="image" className='w-[130px] h-[130px] rounded-full text-[#d0d2d6] border border-[#d0d2d6] border-dashed cursor-pointer flex flex-col justify-center items-center hover:text-white hover:border-white transition-all duration-300 text-sm gap-3 relative overflow-hidden'>
                                    <span><FaImages /></span>
                                    <span>Select Image</span>
                                    {
                                        loader && <div className='absolute bg-slate-600 top-0 left-0 h-full w-full flex justify-center items-center opacity-70 z-20'>
                                            <FadeLoader />
                                        </div>
                                    }
                                    {
                                        selectedImage &&
                                        <img src={selectedImage} alt="" className='absolute top-0 left-0 w-full h-full' />
                                    }
                                </label>
                        }
                        {/* <img src="../../../public/images/admin.jpg" alt="" className='w-[300px] h-[210px]' /> */}
                    </div>
                    <div className='w-full bg-slate-600 p-3 text-sm space-y-2 text-[#d0d2d6] rounded-md relative'>
                        <div><span className='font-bold'>Name: </span> Mahmoud Amer</div>
                        <div><span className='font-bold'>Email: </span> Mahmoud@gmail.com</div>
                        <div><span className='font-bold'>Role: </span> Seller</div>
                        <div><span className='font-bold'>Status: </span> Active</div>
                        <div><span className='font-bold'>Payment Account: </span> <span className='bg-yellow-500 px-2 rounded-sm text-white'>Pending</span></div>
                        <div className="bg-yellow-600 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200 absolute top-0 right-2"><Link><FaRegEdit /></Link></div>
                    </div>
                    <div className='w-full bg-slate-600 p-3 text-sm space-y-2 text-[#d0d2d6] rounded-md relative'>
                        <div><span className='font-bold'>Shop Name: </span> Easy Shop</div>
                        <div><span className='font-bold'>District: </span> Mahmoud@gmail.com</div>
                        <div><span className='font-bold'>Division: </span> Seller</div>
                        <div><span className='font-bold'>Sub District: </span> Active</div>
                        <div onClick={() => setShowEditAddress(!showEditAddress)} className="bg-yellow-600 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200 absolute top-0 right-2"><Link><FaRegEdit /></Link></div>
                    </div>
                    {
                        showEditAddress &&
                        <div>
                            <form className='text-[#d0d2d6] flex flex-col gap-3'>
                                <div>
                                    <label htmlFor="shopName" className='block mb-1'>Shop Name</label>
                                    <input
                                        type="text"
                                        name='shopName'
                                        id='shopName'
                                        placeholder='shop Name'
                                        className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="divisionName" className='block mb-1'>Division Name</label>
                                    <input
                                        type="text"
                                        name='divisionName'
                                        id='divisionName'
                                        placeholder='division Name'
                                        className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="districtName" className='block mb-1'>District Name</label>
                                    <input
                                        type="text"
                                        name='districtName'
                                        id='districtName'
                                        placeholder='district Name'
                                        className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subDistrict" className='block mb-1'>Sub District</label>
                                    <input
                                        type="text"
                                        name='subDistrict'
                                        id='subDistrict'
                                        placeholder='sub district'
                                        className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                                    />
                                </div>
                                <input type="file" className='hidden' id='image' onChange={(e) => handelImgSelect(e)} />

                                <button className='bg-red-500 rounded-sm px-6 py-2 text-white w-fit group relative overflow-hidden'>
                                    <span className='relative z-20'>Save Changes</span>
                                    <span className='group-hover:bg-red-800 -inset-1 group-hover:scale-x-100 scale-x-0 absolute transition-all duration-500 ease-out skew-x-12 origin-center transform'></span>
                                </button>
                            </form>
                        </div>
                    }
                </div>
                <div className='bg-[#6a5fdf] p-4 rounded-md basis-full md:basis-6/12 h-fit flex flex-col gap-3'>
                    <h1 className='text-[#d0d2d6] font-semibold'>Change Password</h1>
                    <form className='text-[#d0d2d6] flex flex-col gap-3'>
                        <div>
                            <label htmlFor="email" className='block mb-1'>Email</label>
                            <input
                                type="text"
                                name='email'
                                id='email'
                                placeholder='email'
                                className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='block mb-1'>Password</label>
                            <input
                                type="text"
                                name='password'
                                id='password'
                                placeholder='password'
                                className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                            />
                        </div>
                        <div>
                            <label htmlFor="newPassword" className='block mb-1'>New Password</label>
                            <input
                                type="text"
                                name='newPassword'
                                id='newPassword'
                                placeholder='new password'
                                className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                            />
                        </div>

                        <button className='bg-red-500 rounded-sm px-6 py-2 text-white w-fit group relative overflow-hidden'>
                            <span className='relative z-20'>Save Changes</span>
                            <span className='group-hover:bg-red-800 -inset-1 group-hover:scale-x-100 scale-x-0 absolute transition-all duration-500 ease-out skew-x-12 origin-center transform'></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;