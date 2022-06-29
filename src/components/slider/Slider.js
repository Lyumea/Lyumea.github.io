import React, {useRef, useState} from "react";
import useSlider from "../../hooks/useSlider";
import WpPopup from "../pop-up/WpPopup";

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

  const [popUp, setPopUp] = useState(false);
  let iPopUp = 0;
  const [iwp, setIwp] = useState(0);

  //active la modale
  const setPopUpTrue = () => {
    setPopUp(true);
  }
  //ferme la modale
  const setPopUpFalse = () => {
    setPopUp(false);
  }
  //gestion de la variable dans le menu
  const HandleNav = (event) => {
    useNav(event);
    iPopUp = event.target.textContent - 1;
    setIwp(iPopUp);
  }
  //slide pour le format mobile
  const HandleNextSlide = () => {
    goToNextSlide();
    (iPopUp === images.length -1) ? iPopUp = 0 : iPopUp ++;
    // setIwp(iPopUp);
    console.log(iPopUp);
  }
  //slide pour le format mobile
  const HandlePreviousSlide = () => {
    goToPreviousSlide();
    (iPopUp === 0) ? iPopUp = images.length - 1 : iPopUp --;
    // setIwp(iPopUp);
    console.log(iPopUp);
  }

    return (
        <div className="slider" >
          {
            (popUp) ? <WpPopup slideCounter={iwp} close={setPopUpFalse} /> : null
          }
          <div ref={slideImage} className="slider-bg"></div>
          <ul ref={slideNav} className="slider-navList">
                  {images.map((image) => (
                    <li key={image.id -1} onClick={HandleNav} > 
                    <span >{image.id}</span>
                    </li>
                  ))}
          </ul>
          <div className="slider--content container">
            <div className="slider--feature">
              <h1 ref={slideText} className="feature--title"> </h1>
             <img className="slider-logo" alt="" ref={slideLogo} />
              <p ref={slideDesc} className="feature--text"> </p>
             <ul className="slider-tech" ref={slideTech}>
                    
              </ul>
              <button className="feature__btn" onClick={setPopUpTrue}> <span>Voir le Projet</span> <span >&#8594; </span> </button>
            </div>
          </div>

          <button onClick={HandlePreviousSlide} className="slider__btn-left">
                <span> &#8592; </span>
            </button>
          <button onClick={HandleNextSlide} className="slider__btn-right">
                <span> &#8594; </span>
          </button>
        </div>
      )
}

export default Slider;