import {useEffect} from "react";
import SliderPortfolio from "../../components/slider/SliderPortfolio";
import Categories from "../../hooks/categories";

export default function MenuPortfolio(){

    useEffect(() => {
        document.title = 'Portfolio | NAI';
    }, []);

    return(
        <div className="menu-portfolio-container">
            <SliderPortfolio categories={Categories} />
        </div>
    )
}