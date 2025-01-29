import React, { useEffect, useState } from 'react'
import useGetHeroSection from '../hooks/useGetHeroSection'
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import './hero.css'
export default function HeroSection() {
    const { data: heroData, isLoading } = useGetHeroSection();
    // console.log(heroData, isLoading);

    const [phrases, setPhrases] = useState([]);
    const [textIndex, setTextIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        if (heroData) {
            setPhrases(heroData.words.map((w) => w.title))
            // console.log(phrases);
        }

    }, [heroData])

    useEffect(() => {
        setFadeIn(false)
        const interval = setInterval(() => {
            setTimeout(() => {
                setTextIndex((prev) => (prev + 1) % phrases.length)
                setFadeIn(true)
            }, 500)
        }, 3000)
        return () => clearInterval(interval)
    }, [phrases.length])
    return (
        <section className='py-4 flex justify-center items-center overflow-hidden px-[100px] h-full'>
            <div className='w-full h-full flex md:flex-row flex-col justify-center items-center'>
                {/* <div className={`${fadeIn? 'opacity-100' : 'opacity-0'}`}>{phrases[textIndex]}</div> */}
                <div className='basis-full md:basis-6/12 flex flex-col p-3'>
                    <h1 className='text-[#0f2133] font-semibold text-[48px]'>
                        {heroData?.title}{" "}
                        <span className={`${fadeIn ? 'opacity-100' : 'opacity-0'} transition-opacity ease-out duration-100 text-[#7e98fd]`}>
                            {phrases[textIndex]}
                        </span>
                    </h1>
                    <h1 className='text-[#0f2133] font-semibold text-[48px]'>{heroData?.sub_title}</h1>
                    <p className='my-4'>{heroData?.description}</p>
                    {/* <Link className='customBtn font-normal gap-[8px] flex justify-center items-center border border-[#0f2133] px-[32px] py-[16px] w-fit overflow-hidden rounded-[100px]'>About Mokabat <IoIosArrowRoundForward/></Link> */}
                    <Link className="mt-2 font-normal gap-[8px] flex justify-center items-center border border-[#0f2133] px-[32px] py-[16px] w-fit overflow-hidden rounded-[100px] relative group hover:text-white text-[#0f2133]">
                        About Mokabat
                        <IoIosArrowRoundForward />
                        {/* <span className="absolute inset-0 bg-[#0f2133] transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-center"></span> */}
                        <span className='absolute -inset-1 bg-[#0f2133] -z-10 group-hover:scale-x-100 scale-x-0 transition-all duration-500 transform ease-out origin-center skew-x-12'></span>
                    </Link>
                </div>
                <div className='basis-full md:basis-6/12 p-3'>
                    {isLoading? null :
                        <div className='w-full h-full relative imgs_container'>
                            <img src={ heroData?.image_two}
                                className='w-full h-full object-contain ball'
                                onLoad={(e) => e.target.src = '../../../public/imgsForTest/ball.webp'}
                            alt="" />

                            <img src={ heroData?.image_three}
                                className='absolute bottom-0 left-0 w-full h-full object-contain window'
                                onLoad={(e) => e.target.src = '../../../public/imgsForTest/squ.webp'}
                            alt="" />

                            <img src={ heroData?.image_one}
                                className='absolute bottom-0 right-0 w-full h-full object-contain astro'
                                onLoad={(e) => e.target.src = '../../../public/imgsForTest/astro.webp'}
                            alt="" />
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
