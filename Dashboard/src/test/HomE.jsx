import { useSelector } from "react-redux";
import Header from "./Header";
import AboutSection from "./home/AboutSection";
import HeroSection from "./home/HeroSection";
import Services from "./home/Services";
import { useEffect } from "react";
import { changeLanguage } from "../store/Reducers/languageSlice";

export default function HomE() {
    const lang = useSelector(state => state.lang.language);
    useEffect(() => {
        const body = document.querySelector('body');
        lang === 'en'? body.setAttribute('dir', 'ltr') : body.setAttribute('dir','rtl')
        localStorage.setItem('lang',lang);
    }, [lang])
    console.log(lang);

    return (
        <main>
            <video
                src='../../public/imgsForTest/cubes.mp4'
                muted
                loop
                autoPlay
                className='fixed top-0 left-0 -z-10 w-screen h-screen brightness-[1.1] contrast-100 object-cover opacity-60'
            />
            <Header lang={lang}/>
            <HeroSection/>
            <AboutSection/>
            <Services/>
        </main>
    )
}
