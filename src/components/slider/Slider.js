import React, {useRef} from "react";
import useSlider from "../../hooks/useSlider";


const Slider = ({images}) => {
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
        images
    );

    return (
        <div className="slider" >
          <div ref={slideImage} className="slider-bg"></div>
          <ul ref={slideNav} className="slider-navList">
                  {images.map((image) => (
                    <li key={image.id -1} onClick={useNav} > 
                    <span>{image.id}</span>
                    </li>
                  ))}
          </ul>
          <div className="slider--content container">
            <div className="slider--feature">
              <h1 ref={slideText} className="feature--title"></h1>
             <img className="slider-logo" ref={slideLogo} />
              <p ref={slideDesc} className="feature--text"></p>
             <ul className="slider-tech" ref={slideTech}>
                
              </ul>
              <button className="feature__btn"> <span>Voir le Projet</span> <span>&#8594; </span> </button>
            </div>
          </div>

          <button onClick={goToPreviousSlide} className="slider__btn-left">
                <span> &#8592; </span>
            </button>
          <button onClick={goToNextSlide} className="slider__btn-right">
                <span> &#8594; </span>
          </button>

        </div>
      )
}

export default Slider;