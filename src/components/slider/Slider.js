import React, {useRef, useState} from "react";
import useSlider from "../../hooks/useSlider";
import AudUI from "../3d/interface/aud/AudUI";
import ApsemUI from "../3d/interface/apsem/ApsemUI";
import SoUI from "../3d/interface/so/SoUI";
import EraUI from "../3d/interface/era/EraUI";
import Spline from '@splinetool/react-spline';
import WpPopup from "../pop-up/WpPopup";

const ChooseSpline = ({counter}) => {
  switch(counter){
    case 0: return <AudUI />;
    case 1 : return <SoUI />;
    case 2 : return <EraUI />;
    case 3 : return <ApsemUI />;
    default : return <Spline scene="https://prod.spline.design/RstQ9TTxWzKz3C9t/scene.splinecode" /> ;
  }
}

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
        <div className="slider">
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
              <p className="date-wp">{images[wSlideCounter].date}</p>
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
          {/* <DefaultUI scene={images[wSlideCounter].scene} /> */}
          
          <ChooseSpline counter={wSlideCounter} />
        </div>
      )
}

export default Slider;