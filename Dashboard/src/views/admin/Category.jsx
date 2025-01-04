import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import { BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";

const Category = () => {
    const [currentPage, setCurrentPage] = useState(1);
        const [searchValue, setSearchValue] = useState('');
        const [perPage, setPerPage] = useState(5);
        const [show, setShow] = useState(false);
        const [selectedImage, setSelectedImage] = useState(null)

        const handleSelectImage = (e) => {
            const file = e.target.files[0];
            if (file) {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    setSelectedImage(fileReader.result)
                }
                fileReader.readAsDataURL(file)
            }
            console.log(selectedImage);
            
        }
    
    return(
        <div className="px-2 lg:px-7 py-5 w-full flex flex-col lg:flex-row gap-4">
            <div className="bg-[#6a5fdf] rounded-md p-4 basis-7/12">
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
                                <th scope="col" className="py-3 px-4">Image</th>
                                <th scope="col" className="py-3 px-4">Name</th>
                                <th scope="col" className="py-3 px-4">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                ['../../../public/images/category/1.jpg','../../../public/images/category/2.jpg','../../../public/images/category/3.jpg','../../../public/images/category/4.jpg'].map((e,i) => <tr key={i}>
                                <td scope="row" className="py-3 px-4">{i + 1}</td>
                                <td scope="row" className="py-3 px-4">
                                    <img src={e} alt="" className="w-[45px] h-[45px]"/>
                                </td>
                                <td scope="row" className="py-3 px-4">Sports</td>
                                <td scope="row" className="py-3 px-4">
                                    <div className="flex gap-3">
                                        <div className="bg-yellow-600 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200"><Link><FaRegEdit/></Link></div>
                                        <div className="bg-red-600 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200"><Link><MdDelete/></Link></div>
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


            <div className="bg-[#6a5fdf] rounded-md p-4 basis-5/12 text-[#d0d2d6]">
                <h1 className="text-xl font-semibold text-center">Add Category</h1>
                <div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="category" className="font-medium">Category Name</label>
                        <input id="category" type='text' placeholder='Category' className='w-full bg-transparent outline-none border border-[#5c5a5a] rounded-md focus:border-indigo-500 overflow-hidden py-2 px-3 mt-1'/>

                        <div className={`w-full border border-dashed h-[280px] flex justify-center items-center my-3 border-[#bfc1c5] hover:border-indigo-100`}>
                            <label htmlFor="image" className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
                                <span><BsCardImage/></span>
                                <span>Select Image</span>
                            </label>
                            <input onChange={(e) => handleSelectImage(e)} type="file" id="image" name="image" className="hidden"/>
                        </div>

                        <button onClick={() => console.log(selectedImage)} className="w-full bg-red-500 py-2 text-white rounded-sm hover:bg-red-600 hover:scale-105 duration-300">Add Category</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Category;