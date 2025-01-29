import React, { useEffect, useState } from 'react'
import { BsCardImage } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';

export default function AddProduct() {
    const categories = [
        {
            id: 1,
            name: 'sports'
        },
        {
            id: 2,
            name: 'cloths'
        },
        {
            id: 3,
            name: 'mobile'
        },
        {
            id: 4,
            name: 'football'
        },
        {
            id: 5,
            name: 'computer'
        },
        {
            id: 6,
            name: 'watch'
        },
    ]
    const [productData, setProductData] = useState({
        productName: '',
        brandName: '',
        category: '',
        stock: 0,
        price: 0,
        discount: 0,
        description: ''
    })
    const [selectedImgs, setSelectedImgs] = useState([]);
    const [numberOfImgsToAdd, setNumberOfImgsToAdd] = useState(1);
    const [allCategories, setAllCategories] = useState(categories)

    const [showCategory, setShowCategory] = useState(false);
    const [category, setCategory] = useState('');
    const [searchValue, setSearchValue] = useState('');

    // handel edit product
    const { productID } = useParams();
    const [productEdit, setProductEdit] = useState({}) // fetching from api
    const [images, setImages] = useState([]);
    useEffect(() => {
        if (productID) {
            setProductData({
                productName: 'T-shirt',
                brandName: 'Nike',
                category: 'Sports',
                stock: 15,
                price: 350,
                discount: 10,
                description: 'This is sport cloths and very nice material.'
            })
            setSelectedImgs(['../../../public/images/category/1.jpg', '../../../public/images/category/2.jpg', '../../../public/images/category/3.jpg'])
            setNumberOfImgsToAdd(selectedImgs.length)
            setCategory(productData.category)
            // setProductData(productEdit);
        } else {
            setProductData({
                productName: '',
                brandName: '',
                category: '',
                stock: 0,
                price: 0,
                discount: 0,
                description: ''
            });
            setSelectedImgs([]);
            setNumberOfImgsToAdd(1)
            setCategory('')

        }
    }, [productID])
// handel if i select image and i need to use another one
    const changeImage = (e, img) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imgSelected = reader.result;
                const newImages = selectedImgs.map((image,i) => (image === img ? imgSelected : image));
                setSelectedImgs(newImages);
            }
            reader.readAsDataURL(file);
        }
    }


    const saveInputData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProductData({
            ...productData,
            [name]: value
        });
    }
    const selectImages = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const updatedImgs = [...selectedImgs];
                updatedImgs.push(reader.result); // حفظ الصورة كـ Base64
                setSelectedImgs(updatedImgs);
            };
            reader.readAsDataURL(file); // تحويل الصورة إلى Base64

            setNumberOfImgsToAdd(numberOfImgsToAdd + 1);
        }
    }

    const removeImageFromArray = (e, index) => {
        const updatedImgs = selectedImgs.filter((_, i) => i !== index);
        setSelectedImgs(updatedImgs);
        setNumberOfImgsToAdd(numberOfImgsToAdd - 1)
    }

    const submitData = (e) => {
        e.preventDefault();
        console.log(selectedImgs);
        console.log(productData);
    }

    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value);

        if (value) {
            let srchValue = allCategories.filter((c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
            setAllCategories(srchValue);
        } else {
            setAllCategories(categories)
        }
    }

    return (
        <div className='px-2 lg:px-7 py-5 w-full'>
            <div className='bg-[#6a5fdf] p-4 rounded-md'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg text-[#d0d2d6]'>Add Product</h1>
                    <Link to={'/seller/dashboard/all-products'} className='bg-[#9e97e9] rounded-sm px-5 py-1 text-sm text-white'>All Products</Link>
                </div>

                <form onSubmit={(e) => submitData(e)}>
                    <div className='text-[#d0d2d6] mt-4 grid grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="productName" className='block mb-1'>Product Name</label>
                            <input
                                type="text"
                                name='productName'
                                value={productData.productName}
                                id='productName'
                                placeholder='Product Name'
                                className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                                onChange={(e) => saveInputData(e)}
                            />
                        </div>

                        <div>
                            <label htmlFor="brandName" className='block mb-1'>Brand Name</label>
                            <input
                                type="text"
                                name='brandName'
                                value={productData.brandName}
                                id='brandName'
                                placeholder='Brand Name'
                                className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                                onChange={(e) => saveInputData(e)}
                            />
                        </div>

                        <div className='relative'>
                            <label htmlFor="category" className='block mb-1'>Category</label>
                            <input
                                type="text"
                                id='category'
                                placeholder='--select category--'
                                className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                                readOnly
                                onClick={() => setShowCategory(!showCategory)}
                                value={category}
                            />
                            <div className={`absolute top-[101%] bg-[#475569] z-30 w-full transition-all ${showCategory ? 'scale-100' : 'scale-0'}`}>
                                <div className='w-full px-4 py-2 fixed'>
                                    <input onChange={(e) => categorySearch(e)} value={searchValue} type="text" placeholder='search' className='w-full px-2 py-1 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 overflow-hidden' />
                                </div>
                                <div className='pt-14'></div>
                                <div className='flex flex-col justify-start items-start h-[200px]'>
                                    {
                                        allCategories.map((c, index) =>
                                            <span key={index} onClick={() => {
                                                setShowCategory(false)
                                                setCategory(c.name)
                                                setSearchValue('')
                                                setAllCategories(categories)
                                            }}
                                                className={`hover:bg-indigo-500 w-full cursor-pointer px-4 py-2 ${c.name === category && 'bg-indigo-500'}`}
                                            >{c.name}</span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="productStock" className='block mb-1'>Product Stock</label>
                            <input
                                type="number"
                                name='stock'
                                value={productData.stock}
                                id='productStock'
                                placeholder='Product Stock'
                                className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                                onChange={(e) => saveInputData(e)}
                            />
                        </div>

                        <div>
                            <label htmlFor="price" className='block mb-1'>Price</label>
                            <input
                                type="number"
                                name='price'
                                value={productData.price}
                                id='price'
                                placeholder='Price'
                                className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                                onChange={(e) => saveInputData(e)}
                            />
                        </div>

                        <div>
                            <label htmlFor="discount" className='block mb-1'>Discount</label>
                            <input
                                type="number"
                                name='discount'
                                value={productData.discount}
                                id='discount'
                                placeholder='% Discount'
                                className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'
                                onChange={(e) => saveInputData(e)}
                            />
                        </div>

                        <div className='col-span-2'>
                            <label htmlFor="description" className='block mb-1'>Description</label>
                            <textarea onChange={(e) => saveInputData(e)} value={productData.description} name='description' id='description' placeholder='description' className='bg-transparent outline-none rounded-md border border-slate-700 focus:border-indigo-700 px-4 py-1 w-full'></textarea>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-[#d0d2d6]'>
                        {/* {
                            Array(numberOfImgsToAdd).fill().map((_, index) =>
                                <div key={index} className={`basis-6/12 relative border border-dashed h-[180px] flex justify-center items-center border-[#bfc1c5] hover:border-indigo-100`}>
                                    {!selectedImgs[index] &&
                                        <label htmlFor={`image-${index}`} className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
                                            <span><BsCardImage /></span>
                                            <span>Select Image</span>
                                        </label>
                                    }
                                    {
                                        selectedImgs[index] &&
                                        <>
                                            <img src={selectedImgs[index]} alt="" className='w-full h-full' />
                                            <span
                                                onClick={(e) => removeImageFromArray(e, index)}
                                                title='Remove'
                                                className='absolute top-1 right-1 bg-slate-950 text-white w-[25px] h-[25px] rounded-full text-lg flex justify-center items-center hover:bg-red-600 cursor-pointer transition-all hover:scale-105 duration-200'
                                            ><IoIosClose /></span>
                                        </>
                                    }
                                    <input type="file" id={`image-${index}`} name={`image-${index}`} onChange={(e) => selectImages(e, index)} className="hidden" />
                                </div>
                            )
                        } */}
                        {
                            selectedImgs.map((img, i) =>
                                <div key={i} className={`relative w-full border border-dashed h-[180px] flex justify-center items-center border-[#bfc1c5] hover:border-indigo-100`}>
                                    <label htmlFor={`image-${i}`} className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
                                        <img src={selectedImgs[i]} alt="" className='w-full h-full' />
                                    </label>
                                    <input type="file" id={`image-${i}`} name={`image-${i}`} onChange={(e) => changeImage(e,img)} className="hidden" />
                                    <span
                                        onClick={(e) => removeImageFromArray(e, i)}
                                        title='Remove'
                                        className='absolute top-1 right-1 bg-slate-950 text-white w-[25px] h-[25px] rounded-full text-lg flex justify-center items-center hover:bg-red-600 cursor-pointer transition-all hover:scale-105 duration-200'
                                    ><IoIosClose /></span>
                                </div>
                            )
                        }

                        <label htmlFor={`image`} className="w-full h-[180px] border border-dashed flex flex-col justify-center items-center cursor-pointer">
                            <span><BsCardImage /></span>
                            <span>Select Image</span>
                        </label>
                        <input type="file" id={`image`} name={`image`} onChange={(e) => selectImages(e)} className="hidden" />
                    </div>

                    <button className='bg-red-600 rounded-sm px-8 py-2 text-white mt-5 hover:bg-red-500 hover:pl-9'>Add Product</button>
                </form>
            </div >
        </div >
    )
}
