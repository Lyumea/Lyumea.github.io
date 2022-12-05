import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard,Mousewheel,Pagination } from "swiper";
import { NavLink } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Graphisme from "../../components/portfolio/Graphisme";
import UI from "../../components/portfolio/UI";
import Print from "../../components/portfolio/Print";
import Videos from "../../components/portfolio/Videos";

const Sections = ({images, h1}) => {

    const Content = ({section, h1}) =>{
        if(h1 === "Graphisme"){
            return <Graphisme link={section.liens} />
        }

        if(h1 === "UI"){
            return <UI link={section} />
        }

        if(h1 === "Print"){
            return <Print link={section} />;
        }

        if(h1 === "Vidéo"){
            return <Videos link={section} />;
        }
    }


    return(
        <div className="portfoliod">
            <NavLink className="return" to="/portfolio"> <span>&#8592;</span> Retour </NavLink>
            <h1 className="container sectionh1">Portfolio <br/> {h1}</h1>
            <Swiper
                direction={"vertical"}
                pagination={{clickable: true,}}
                modules={[Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
                mousewheel
                keyboard
            >

            {
                images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className={"slide-container " + image.class}>
                            <div className="section-filter"></div>
                            <div className="sectionh2"><h2 className="container">{image.nom}</h2></div>
                            <Content section={image} h1={h1} />
                        </div>  
                    </SwiperSlide> 
                ))
            }
                
            </Swiper>
        </div>
    )
}

export default Sections;