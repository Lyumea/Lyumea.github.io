//import react from "react";
import SliderPortfolio from "../../components/slider/SliderPortfolio";
import Categories from "../../hooks/categories";

export default function MenuPortfolio(){
    return(
        <div className="menu-portfolio-container">
            <SliderPortfolio categories={Categories} />
        </div>
    )
}