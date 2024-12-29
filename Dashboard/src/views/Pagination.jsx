import React from 'react'
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

export default function Pagination({pageNumber, setPageNumber, totalItems, perPage, showItemsInPagination}) {
    
    let totalPages = Math.ceil(totalItems / perPage);
    let startPage = Math.max(1, pageNumber - Math.floor(showItemsInPagination / 2));
    let endPage = Math.min(totalPages, startPage + showItemsInPagination - 1);

    if (endPage - startPage + 1 < showItemsInPagination) {
        startPage = Math.max(1, endPage - showItemsInPagination + 1);
    }

    const createBtn = () => {
        const btns = [];
        for (let i = startPage; i <= endPage; i++) {
            btns.push(
                <li onClick={() => setPageNumber(i)} className={`${pageNumber === i? 'bg-indigo-300 text-white ' : 'bg-slate-600 text-[#d0d2d6]'} w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer hover:bg-indigo-400`}>
                    {i}
                </li>
            )
        }
        return btns;
    }

    return (
        <ul className='flex gap-3'>
            {
                pageNumber > 1 &&
                <li onClick={() => setPageNumber(pageNumber - 1)} className='text-black bg-[#d0d2d6] flex justify-center items-center text-sm w-[33px] h-[33px] rounded-full cursor-pointer'>
                    <FaAnglesLeft />
                </li>
            }{
                createBtn()
            }{
                pageNumber < totalPages &&
                <li onClick={() => setPageNumber(pageNumber + 1)} className='text-black bg-[#d0d2d6] flex justify-center items-center text-sm w-[33px] h-[33px] rounded-full cursor-pointer'>
                    <FaAnglesRight />
                </li>
            }
        </ul>
    )
}
