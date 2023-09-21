import React, {useEffect, useState} from "react";
import LogoNai from "../components/3d/logo/LogoNai";
import Clouds from "./../components/Clouds";
import "../Styles/_mixins.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Parallax, Mousewheel } from "swiper";
import Apropos from "../components/Apropos";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
//Mobile Version
import Loading from "../components/basic/Loading";

SwiperCore.use([Navigation]);


const Home = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        document.title = 'Accueil | NAI';

        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
          };
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };

    }, []);


        return(
            <header className="home-header">
                <div className="img-clouds cloud2"></div>
                <Swiper 
                    direction={"horizontal"}
                    modules={[Navigation, Parallax, Mousewheel]}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                   }}

                    parallax
                    mousewheel
                >
                    <SwiperSlide className="home-swiper">
                        <h1 className="home-main-title"> NAI • Design</h1>
                        {/*<LogoNai />
                        <Loading />*/}
                        { (windowSize >= 767 ) ? <LogoNai /> : <Loading /> }
                        {/* console.log(windowSize) */}
                        <div className="img-clouds cloud1"></div>
                        <Clouds boxShadow={1} cloudClassName="cloud home-cloud" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Apropos />
                        <div className="img-clouds cloud2"></div>
                        <div className="img-clouds cloud1"></div>
                    </SwiperSlide>
                    <div className="swiper-prev" ref={navigationPrevRef}><span>&#8592;</span> Accueil</div>
                    <div className="swiper-next" ref={navigationNextRef}>À propos <span>&#8594;</span></div>
                    <Clouds boxShadow={2} cloudClassName="cloud home-cloud" />
                </Swiper>
            </header>
        )
}

export default Home;