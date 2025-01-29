import React from 'react'
import useGetAboutSection from '../hooks/uesGetAboutSection'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import { Autoplay } from 'swiper/modules';
import './hero.css'

export default function AboutSection() {
    const { data: aboutMokabat, isLoading } = useGetAboutSection();
    // console.log(aboutMokabat);

    return (
        <section className='overflow-hidden py-[60px] about_section'>
            <div className='mx-[58px] px-[12px]'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-semibold'>About Mokabat</h1>
                    <p className='font-semibold'>To be at the forefront of digital change in innovative product</p>
                </div>
                <div className='py-[32px]'>
                    <Swiper
                        speed={10000}
                        spaceBetween={27}
                        slidesPerView={3}
                        modules={[Autoplay]}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        loop={true}
                        className="about_swiper"
                        breakpoints={{
                            992: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            350: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {
                            aboutMokabat?.map((element, index) =>
                                <SwiperSlide key={element.id} className='h-full'>
                                    <div className='flex flex-col bg-[#fff] rounded-[16px] p-4 shadow-[rgba(99, 99, 99, 0.074)_0px_2px_8px_0px] overflow-hidden h-[100%]'>
                                        <div className='flex gap-3 justify-start items-center'>
                                            <img src={element?.image} alt="" className='w-[80px] h-[80px]' />
                                            <h1 className='text-[24px]'>{element?.title}</h1>
                                        </div>
                                        <p className='text-[16px] my-4'>{element?.description}</p>
                                    </div>
                                </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
