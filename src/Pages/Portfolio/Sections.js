import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard,Mousewheel,Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Sections = ({images, h1}) => {
    return(
        <div className="portfoliod">
            <h1 className="container">Portfolio <br/> {h1}</h1>
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
                            <div className={image.class + " slide-container"}>
                            <div><h2 className="container">{image.nom}</h2></div>
                            </div>  
                        </SwiperSlide> 
                    ))

                }
                
            </Swiper>
        </div>
    )
}

export default Sections;