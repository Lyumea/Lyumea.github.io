import React, {useRef, useState} from "react";
import useSlider from "../../hooks/useSlider";
// import AudUI from "../3d/interface/aud/AudUI";
import DefaultUI from "../3d/interface/DefautUI";
import WpPopup from "../pop-up/WpPopup";

const Slider = ({images}) => {
    const slideImage = useRef(null);
    const slideText = useRef(null);
    const slideDesc = useRef(null);
    const slideTech = useRef(null);
    const slideNav = useRef(null);
    const slideLogo = useRef(null);
    const {useNav, goToPreviousSlide, goToNextSlide, wSlideCounter} = useSlider(
        slideImage,
        slideText,
        slideDesc,
        slideTech,
        slideNav,
        slideLogo,
        images
    );

  const [popUp, setPopUp] = useState(false);

  //active la modale
  const setPopUpTrue = () => {
    setPopUp(true);
  }
  //ferme la modale
  const setPopUpFalse = () => {
    setPopUp(false);
  }

    return (
        <div className="slider" >
          {(popUp) ? <WpPopup slideCounter={wSlideCounter} close={setPopUpFalse} /> : null}
          <div ref={slideImage} className="slider-bg"></div>
          <ul ref={slideNav} className="slider-navList">
                  {images.map((image) => (
                    <li key={image.id -1} onClick={useNav} > 
                      <span >{image.id}</span>
                    </li>
                  ))}
          </ul>
          <div className="slider--content container">
            <div className="slider--feature">
              <h1 ref={slideText} className="feature--title"> </h1>
             <img className="slider-logo" alt="" ref={slideLogo} />
              <p ref={slideDesc} className="feature--text"> </p>
             <ul className="slider-tech" ref={slideTech}></ul>
              <button className="feature__btn" onClick={setPopUpTrue}> <span>Voir le Projet</span> <span >&#8594; </span> </button>
            </div>
          </div>

          <button onClick={goToPreviousSlide} className="slider__btn-left">
            <span> &#8592; </span>
          </button>
          <button onClick={goToNextSlide} className="slider__btn-right">
            <span> &#8594; </span>
          </button>
          <DefaultUI scene={images[wSlideCounter].scene} />
        </div>
      )
}

export default Slider;