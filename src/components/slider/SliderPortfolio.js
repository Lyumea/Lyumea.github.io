import React, {useRef} from "react";
import useSlider from "../../hooks/useSlider";

const SliderPortfolio = ({categories}) =>{
    const slideImage = useRef(null);
    const slideText = useRef(null);
    const slideDesc = useRef(null);
    const slideTech = useRef(null);
    const slideNav = useRef(null);
    const slideLogo = useRef(null);

    const {useNav, goToPreviousSlide, goToNextSlide} = useSlider(
        slideImage,
        slideText,
        slideDesc,
        slideTech,
        slideNav,
        slideLogo,
        categories
    );

    return(
        <div className="slider" >
          <div ref={slideImage} className="slider-bg"></div>
          <ul ref={slideNav} className="slider-navList">
                  {categories.map((categorie) => (
                    <li key={categorie.id -1}  > 
                    <span onClick={useNav} className="slider-item" >{categorie.id}</span>
                    {/*<span className="slider-item" > : {categorie.text}</span>*/}
                    </li>
                  ))}
          </ul>

          <button onClick={goToPreviousSlide} className="slider__btn-left">
                <span> &#8592; </span>
            </button>
          <button onClick={goToNextSlide} className="slider__btn-right">
                <span> &#8594; </span>
          </button>

          <div className="slider--content container">
            <div className="slider--feature">
            <ul className="slider-tech" ref={slideTech}>
                
            </ul>
              <h1 ref={slideText} className="feature--title"> </h1>
             <img className="slider-logo" ref={slideLogo} alt="" />
              <p ref={slideDesc} className="feature--text"> </p>
              <button> 	&#8595; </button>
            </div>
          </div>

          
        </div>
    )
}

export default SliderPortfolio;