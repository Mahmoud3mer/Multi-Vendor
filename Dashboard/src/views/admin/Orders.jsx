import { useState } from "react";
import { LuArrowDownFromLine } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);

    const showOrderData = (e) => {
        setShow(!show)
    }

    return(
        <>
            <div className="px-2 lg:px-7 py-5 w-full">
                <div className="bg-[#6a5fdf] rounded-md p-4">
                    <div className="flex justify-between">
                        <select onChange={(e) => setPerPage(parseInt(e.target.value))} name="" id="" className="bg-[#6a5fdf] outline-none border border-[#5c5a5a] rounded-md py-2 px-2 text-[#d0d2d6] text-sm cursor-pointer">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                        <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type='text' placeholder='Search' className='bg-transparent outline-none border border-[#5c5a5a] rounded-md focus:border-indigo-500 overflow-hidden text-sm py-2 px-2'/>
                    </div>

                    <div className="w-full">
                        <table className="text-[#d0d2d6] w-full text-left text-sm">
                            <thead className="uppercase border-b border-slate-700">
                                <tr>
                                    <th scope="col" className='py-3 px-4'>ORDER ID</th>
                                    <th scope="col" className='py-3 px-4'>PRICE</th>
                                    <th scope="col" className='py-3 px-4'>PAYMENT STATUS</th>
                                    <th scope="col" className='py-3 px-4'>ORDER STATUS</th>
                                    <th scope="col" className='py-3 px-4'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [1,2,3,4,6,7].map((element, i) =>
                                    <>
                                        <tr key={i} className="border-b border-slate-700">
                                        <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>#343434</td>
                                        <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>$3654</td>
                                        <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                        <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                        <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <Link>View</Link>
                                        </td>
                                        <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap cursor-pointer' onClick={(e) => showOrderData(e)}><LuArrowDownFromLine/></td>
                                    </tr>
                                    {
                                    show && [1,2,3].map((e,i) =>  <tr key={i} className="bg-[#8088ed] border-b border-slate-700">
                                    <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>#343434</td>
                                    <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>$3654</td>
                                    <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                    <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                    <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <Link>View</Link>
                                    </td>
                                    <td></td>
                                    </tr>)
                                    }
                                </>
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
        </>
    )
}

export default Orders;