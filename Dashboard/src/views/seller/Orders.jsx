import { useState } from "react";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import Search from "../components/Search";

export default function Orders() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);

    return (
        <div className="px-2 lg:px-7 py-5 w-full">
            <h1 className="text-xl font-bold mb-3 text-slate-700">Orders</h1>
            <div className="bg-[#6a5fdf] rounded-md p-4">
                <Search setPerPage={setPerPage} searchValue={searchValue} setSearchValue={setSearchValue}/>

                <div className="">
                    <table className="text-[#d0d2d6] w-full text-left">
                        <thead className="uppercase border-b border-slate-700">
                            <tr>
                                <th scope="col" className="py-3 px-4">Order ID</th>
                                <th scope="col" className="py-3 px-4">Price</th>
                                <th scope="col" className="py-3 px-4">Payment Status</th>
                                <th scope="col" className="py-3 px-4">Order Status</th>
                                <th scope="col" className="py-3 px-4">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((_, i) => <tr key={i}>
                                    <td scope="row" className="py-3 px-4">#26548</td>
                                    <td scope="row" className="py-3 px-4">$2356</td>
                                    <td scope="row" className="py-3 px-4">Pending</td>
                                    <td scope="row" className="py-3 px-4">Pending</td>
                                    <td scope="row" className="py-3 px-4">
                                        <div className="flex">
                                            <div className="bg-green-500 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200"><Link to={`/seller/dashboard/orders/order-details/${i}`}><FaRegEye /></Link></div>
                                        </div>
                                    </td>
                                </tr>)
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
