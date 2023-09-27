import React, {useEffect, useRef, useState} from "react";
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

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {

    const handleWindowResize = () => {
        setWindowSize(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };

}, []);


  //active la modale
  const setPopUpTrue = () => {
    setPopUp(true);
  }
  //ferme la modale
  const setPopUpFalse = () => {
    setPopUp(false);
  }

  //change de slide au scroll
  const handleWheel = (e) => {
    (e.deltaY > 0) ? goToNextSlide() : goToPreviousSlide();
  }

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50 

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? goToNextSlide() : goToPreviousSlide()
    // add your conditional logic here
  }

    return (
        <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className="slider" onWheel={handleWheel} >
          <WpPopup context={"web-project"} slideCounter={wSlideCounter} close={setPopUpFalse} state={popUp} />
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
              <div className="feature--title">
                <h1>Projet Web</h1>
                <h2 ref={slideText} className="h1"> </h2>
              </div>
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
          
          { (windowSize >= 767) && <ChooseSpline counter={wSlideCounter} /> }
        </div>
      )
}

export default Slider;