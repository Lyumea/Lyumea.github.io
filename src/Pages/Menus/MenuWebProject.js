import {useEffect} from "react";
import Slider from "../../components/slider/Slider";
import Images from "../../hooks/images";

export default function MenuWebProject(){

    useEffect(() => {
        document.title = 'Projets WEB | NAI';
    }, []);

    return(
        <div className="MenuWP">
            <div className="slider-container">
                <Slider images={Images} />
            </div>
        </div>
    )
}