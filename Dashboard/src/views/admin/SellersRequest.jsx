import { useState } from "react";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

export default function SellersRequest() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);

return(
    <div className="px-2 lg:px-7 py-5 w-full">
        <h1 className="text-xl font-bold mb-3 text-slate-700">Sellers Request</h1>
        <div className="bg-[#6a5fdf] rounded-md p-4">
            <div className="flex justify-between">
                <select onChange={(e) => setPerPage(parseInt(e.target.value))} name="" id="" className="bg-[#6a5fdf] outline-none border border-[#5c5a5a] rounded-md py-2 px-2 text-[#d0d2d6] text-sm cursor-pointer">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type='text' placeholder='Search' className='bg-transparent outline-none border border-[#5c5a5a] rounded-md focus:border-indigo-500 overflow-hidden text-sm py-2 px-2'/>
            </div>

            <div className="">
                <table className="text-[#d0d2d6] w-full text-left">
                    <thead className="uppercase border-b border-slate-700">
                        <tr>
                            <th scope="col" className="py-3 px-4">No</th>
                            <th scope="col" className="py-3 px-4">Name</th>
                            <th scope="col" className="py-3 px-4">Email</th>
                            <th scope="col" className="py-3 px-4">Payment Status</th>
                            <th scope="col" className="py-3 px-4">Status</th>
                            <th scope="col" className="py-3 px-4">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            ['../../../public/images/category/1.jpg','../../../public/images/category/2.jpg','../../../public/images/category/3.jpg','../../../public/images/category/4.jpg'].map((e,i) => <tr key={i} className="border-b border-[#d0d2d6]">
                            <td scope="row" className="py-3 px-4">{i + 1}</td>
                            <td scope="row" className="py-3 px-4">Mahmoud Amer</td>
                            <td scope="row" className="py-3 px-4">amer@gmail.com</td>
                            <td scope="row" className="py-3 px-4">Active</td>
                            <td scope="row" className="py-3 px-4">Deactive</td>
                            <td scope="row" className="py-3 px-4">
                                <div className="flex">
                                    <div className="bg-green-500 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200"><Link to={'/admin/dashboard/seller/details/1'}><FaRegEye/></Link></div>
                                </div>
                            </td>
                        </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>

            <div className="w-full mt-4 flex justify-end py-3">
                <Pagination
                    pageNumber={currentPage}
                    setPageNumber={setCurrentPage}
                    totalItems={50}
                    perPage={perPage}
                    showItemsInPagination={4}
                />
            </div>
        </div>
    </div>
)
}
