import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import { BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, clearMessage, deleteCategory, getCategories } from "../../store/Reducers/categoryReducer";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { CiWarning } from "react-icons/ci";

const Category = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);
    const [selectedImage, setSelectedImage] = useState(null);

    const dispatch = useDispatch();
    const { loader, successMessage, errorMessage, category, categories, getCategoriesLoader, categoriesLength, deleteMessageSuccess, deleteMessageError } = useSelector(state => state.category);

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage, {
                duration: 2000,
            })
            dispatch(clearMessage());
            setCategoryData({
                name: '',
                image: ''
            })
            setSelectedImage(null)
        }
        if (errorMessage) {
            toast.error(errorMessage, {
                duration: 2000,
            })
            dispatch(clearMessage());
        }
    }, [successMessage, errorMessage]);

    useEffect(() => {
        dispatch(getCategories({ page: currentPage, limit: perPage, search: searchValue }));
        // console.log(categoriesLength);

    }, [successMessage, currentPage, perPage, searchValue]);


    useEffect(() => {
        if (deleteMessageSuccess) {
            toast.success(deleteMessageSuccess, {
                duration: 2000
            })
            dispatch(clearMessage());
        }

        if (deleteMessageError) {
            toast.error(deleteMessageError, {
                duration: 2000
            })
            dispatch(clearMessage());
        }

    }, [deleteMessageError, deleteMessageSuccess])


    const [categoryData, setCategoryData] = useState({
        name: '',
        image: null
    })

    const handleSelectImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setSelectedImage(fileReader.result)
            }
            fileReader.readAsDataURL(file)
            setCategoryData({
                ...categoryData,
                image: file
            })
        }
        console.log(selectedImage);
    }

    const removeSelectedCatecoryImage = (e) => {
        setSelectedImage(null)
    }

    const handelChangData = (e) => {
        const { name, value } = e.target;
        setCategoryData({
            ...categoryData,
            [name]: value
        })
    }

    const submitData = (e) => {
        e.preventDefault();
        if (categoryData.image && categoryData.name) {
            dispatch(addCategory(categoryData))
        }
        // console.log(categoryData);
    }


    const handleSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const deleteSpecificCategory = (e, categoryID) => {
        toast.custom((t) => (
            <div className="bg-[#494299e2] p-4 rounded-lg shadow-lg">
                <div className="flex flex-col justify-center items-center">
                    <span className="text-red-600 text-5xl font-bold"><CiWarning /></span>
                    <p className="text-[#d0d2d6]">Are you sure you want to delete this category?</p>
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-red-600 text-white px-4 py-1 rounded-md mr-2 hover:bg-red-500"
                        onClick={() => {
                            const toastId = toast.loading('Deleting category...');
                            // If the user confirms, proceed with deletion
                            toast.promise(
                                dispatch(deleteCategory(categoryID)).unwrap()
                                    .then(() => {
                                        // toast.success(deleteMessageSuccess); // عرض رسالة نجاح
                                        toast.dismiss(t.id); // إغلاق Toast التأكيد
                                        toast.dismiss(toastId); // إغلاق Toast التحميل
                                    })
                                    .catch(() => {
                                        // toast.error(deleteMessageError); // عرض رسالة خطأ
                                        toast.dismiss(toastId); // إغلاق Toast التحميل
                                    }), // Dispatch the delete action
                            );
                            toast.dismiss(t.id); // Dismiss the confirmation toast
                        }}
                    >
                        Confirm
                    </button>
                    <button
                        className="bg-gray-300 text-gray-800 px-4 py-1 rounded-md hover:bg-gray-400"
                        onClick={() => toast.dismiss(t.id)} // Dismiss the toast if the user cancels
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ));
    }


    const cssOverrideProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto'
    }

    return (
        <div className="px-2 lg:px-7 py-5 w-full flex flex-col lg:flex-row gap-4 h-fit">
            <div className="bg-[#6a5fdf] rounded-md p-4 basis-7/12 h-fit">
                {/* <Search setPerPage={setPerPage} searchValue={searchValue} setSearchValue={setSearchValue}/> */}
                <div className="flex justify-between">
                    <select onChange={(e) => setPerPage(parseInt(e.target.value))} name="" id="" className="bg-[#6a5fdf] outline-none border border-[#5c5a5a] rounded-md py-2 px-2 text-[#d0d2d6] text-sm cursor-pointer">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input onChange={(e) => handleSearchValue(e)} value={searchValue} type='text' placeholder='Search' className='bg-transparent outline-none border border-[#5c5a5a] rounded-md focus:border-indigo-500 overflow-hidden text-sm py-2 px-2' />
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
                                getCategoriesLoader ? <tr><td colSpan={4} className="pt-5"><ClipLoader cssOverride={cssOverrideProperties} color="#ffffff" /></td></tr> : categories?.map((category, i) =>
                                    <tr key={i}>
                                        <td scope="row" className="py-3 px-4">{i + 1}</td>
                                        <td scope="row" className="py-3 px-4">
                                            <img src={category.image} alt="" className="w-[45px] h-[45px]" />
                                        </td>
                                        <td scope="row" className="py-3 px-4">{category.name}</td>
                                        <td scope="row" className="py-3 px-4">
                                            <div className="flex gap-3">
                                                <div className="bg-yellow-600 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200"><Link><FaRegEdit /></Link></div>
                                                <div
                                                    className="bg-red-600 px-1 py-1 rounded cursor-pointer hover:scale-105 duration-200"
                                                    onClick={(e) => deleteSpecificCategory(e, category._id)}
                                                ><MdDelete /></div>
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
                        totalItems={categoriesLength}
                        perPage={perPage}
                        showItemsInPagination={4}
                    />

                </div>
            </div>


            <div className="bg-[#6a5fdf] rounded-md p-4 basis-5/12 text-[#d0d2d6]">
                <h1 className="text-xl font-semibold text-center">Add Category</h1>
                <div>
                    <form onSubmit={(e) => submitData(e)}>
                        <label htmlFor="category" className="font-medium">Category Name</label>
                        <input
                            onChange={(e) => handelChangData(e)}
                            value={categoryData.name}
                            name="name"
                            id="category"
                            type='text'
                            placeholder='Category'
                            className='w-full bg-transparent outline-none border border-[#5c5a5a] rounded-md focus:border-indigo-500 overflow-hidden py-2 px-3 mt-1'
                        />

                        <div className={`relative w-full border border-dashed h-[280px] flex justify-center items-center my-3 border-[#bfc1c5] hover:border-indigo-100`}>
                            {
                                !selectedImage &&
                                <label htmlFor="image" className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
                                    <span><BsCardImage /></span>
                                    <span>Select Image</span>
                                </label>
                            }
                            {
                                selectedImage &&
                                <>
                                    <img src={selectedImage} alt="" className="w-full h-full" />
                                    <span
                                        onClick={(e) => removeSelectedCatecoryImage(e)}
                                        className='absolute top-1 right-1 bg-slate-950 text-white w-[25px] h-[25px] rounded-full text-lg flex justify-center items-center hover:bg-red-600 cursor-pointer transition-all hover:scale-105 duration-200'
                                    ><IoIosClose /></span>
                                </>
                            }

                            <input onChange={(e) => handleSelectImage(e)} type="file" id="image" name="image" className="hidden" />
                        </div>

                        <button disabled={loader ? true : false} className="w-full bg-red-500 py-2 text-white rounded-sm hover:bg-red-600 duration-300">
                            {
                                loader ? <ClipLoader cssOverride={cssOverrideProperties} color="#ffffff" /> : 'Add Category'
                            }
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Category;