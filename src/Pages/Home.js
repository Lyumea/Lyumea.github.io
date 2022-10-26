import LogoNai from "../components/3d/logo/LogoNai";
import Clouds from "./../components/Clouds";
import "../Styles/_mixins.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Apropos from "../components/Apropos";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';


export default function Home(){

        return(
            <header className="home-header">
                <div className="img-clouds cloud2"></div>
                <Swiper 
                    direction={"horizontal"}
                    modules={[Navigation]}
                    navigation
                >
                    <SwiperSlide className="home-swiper">
                        <h1 className="home-main-title"> NAI • Creative</h1>
                        <LogoNai />
                        <div className="img-clouds cloud1"></div>
                        <Clouds boxShadow={1} cloudClassName="cloud home-cloud" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Apropos />
                        <div className="img-clouds cloud2"></div>
                        <div className="img-clouds cloud1"></div>
                    </SwiperSlide>
                    <Clouds boxShadow={3} cloudClassName="cloud home-cloud" />
                </Swiper>
            </header>
        )
}