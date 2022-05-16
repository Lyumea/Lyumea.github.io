//import react from "react";
import Slider from "../../components/slider/Slider";
import Images from "../../hooks/images";

export default function MenuWebProject(){
    return(
        <div className="MenuWP">
            <div className="slider-container">
                {/* 
                    <div className="wp-header etu">
                    <img src={ETU} alt="" />
                    <div>
                    <span> Projet WEB 01</span>
                    </div>
                    <h1>ETU'</h1>
                    </div>
                */}

                <Slider images={Images} />
            </div>
        </div>
    )
}