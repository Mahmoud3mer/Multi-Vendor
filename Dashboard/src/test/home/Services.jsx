import React, { useEffect, useState } from 'react'
import useGetServices from '../hooks/useGetServices'
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Services() {
    const { data: services, isLoading } = useGetServices();
    const [images, setImages] = useState([])
    const [openAccordion, setOpenAccordion] = useState(null);
    const [accordionIndex, setAccordionIndex] = useState(null);


    console.log(services);

    useEffect(() => {
        if (services) {
            const images = services.map((service) => service.image);
            setImages(images)
        }
    },[services])

    const handleOpenAccordion = (e, index) => {
        setTimeout(() => {
            setAccordionIndex(openAccordion === index ? null : index)
            setOpenAccordion(openAccordion === index ? null : index);
        },300)
    }

    return (
        <section className='mx-[48.4px] px-[12px] py-[60px]'>
            <div className='mb-[48px] p-[8px] flex flex-col gap-[12px] mx-[130px] justify-center items-center'>
                <h1 className='text-[32px] pb-[8px] font-semibold'>Our Services For your <span className='text-[#7e98fd]'>Tech Driven Future</span></h1>
                <p className='text-[16px] mb-[16px] text-center'>We offer custom solutions from start to finish, covering everything from ideation and design to development, testing, growth, and knowledge sharing.</p>
            </div>

            <div className='flex'>
                <div className='basis-5/12 p-[8px] grid place-items-center relative'>
                    {
                        images.map((image,index) =>
                            <img key={index} src={image} className={`${accordionIndex === index ? 'opacity-100' : 'opacity-0'} absolute translate-x-0 duration-300 transition-opacity ease-in`} alt="" />
                        )
                    }
                    {/* <img src={images[0]} alt="" className='w-full' /> */}
                </div>
                <div className='basis-7/12 p-[8px] flex flex-col gap-[16px]'>

                    {
                        services &&
                        services.map((service, index) =>
                            <div key={index} className={`accordion bg-[#fff] ${openAccordion === index && 'bg-[#7e98fd] text-white'} rounded-[16px] overflow-hidden transition ease-in-out duration-300 shadow-md`}>
                                <button className='py-[16px] px-[20px] flex justify-between items-center w-full' onClick={(e) => handleOpenAccordion(e, index)}>
                                    <h1><span>{index}&nbsp; &nbsp;</span> {service?.title}</h1>
                                    {
                                        openAccordion === index ? <span><IoMdClose /></span> : <span><FaPlus /></span>
                                    }

                                </button>
                                <div className={`${openAccordion === index ? 'block py-[16px] px-[20px]' : 'hidden'}`}>
                                    {service?.description}
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    )
}
