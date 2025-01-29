import { useState } from "react";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Search from "../components/Search";

export default function AllProducts() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);

    return (
        <div className="px-2 lg:px-7 py-5 w-full">
            <h1 className="text-xl font-bold mb-3 text-slate-700">All Products</h1>
            <div className="bg-[#6a5fdf] rounded-md p-4">
                <Search setPerPage={setPerPage} searchValue={searchValue} setSearchValue={setSearchValue}/>
                <div className="">
                    <table className="text-[#d0d2d6] w-full text-left">
                        <thead className="uppercase border-b border-slate-700">
                            <tr>
                                <th scope="col" className="py-3 px-4">No</th>
                                <th scope="col" className="py-3 px-4">Image</th>
                                <th scope="col" className="py-3 px-4">Name</th>
                                <th scope="col" className="py-3 px-4">Category</th>
                                <th scope="col" className="py-3 px-4">Brand</th>
                                <th scope="col" className="py-3 px-4">Price</th>
                                <th scope="col" className="py-3 px-4">Discount</th>
                                <th scope="col" className="py-3 px-4">Stock</th>
                                <th scope="col" className="py-3 px-4">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                ['../../../public/images/category/1.jpg', '../../../public/images/category/2.jpg', '../../../public/images/category/3.jpg', '../../../public/images/category/4.jpg'].map((e, i) => <tr key={i}>
                                    <td scope="row" className="py-3 px-4">{i + 1}</td>
                                    <td scope="row" className="py-3 px-4">
                                        <img src={e} alt="" className="w-[45px] h-[45px]" />
                                    </td>
                                    <td scope="row" className="py-3 px-4">Men woven round neck</td>
                                    <td scope="row" className="py-3 px-4">sports</td>
                                    <td scope="row" className="py-3 px-4">Addids</td>
                                    <td scope="row" className="py-3 px-4">$300</td>
                                    <td scope="row" className="py-3 px-4">%36</td>
                                    <td scope="row" className="py-3 px-4">123</td>
                                    <td scope="row" className="py-3 px-4">
                                        <div className="flex gap-3">
                                            <div className="bg-yellow-600 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200"><Link to={`/seller/dashboard/edit-product/${i + 1}`}><FaRegEdit /></Link></div>
                                            <div className="bg-green-500 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200"><Link><FaRegEye /></Link></div>
                                            <div className="bg-red-600 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200"><Link><MdDelete /></Link></div>
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
