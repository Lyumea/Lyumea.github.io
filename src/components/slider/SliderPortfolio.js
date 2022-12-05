import React, {useRef} from "react";
import useSliderPortfolio from "../../hooks/useSliderPortfolio";
import { NavLink } from 'react-router-dom';

const SliderPortfolio = ({categories}) =>{
  const slideImage = useRef(null);
  const slideText = useRef(null);
  const slideDesc = useRef(null);
  const slideTech = useRef(null);
  const slideNav = useRef(null);

  const {useNav, goToPreviousSlide, goToNextSlide, pSlideCounter} = useSliderPortfolio(
    slideImage,
    slideText,
    slideDesc,
    slideTech,
    slideNav,
    categories
  );

  //change de slide au swipe
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }

  const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 200) {
      // do your stuff here for left swipe
      goToNextSlide();
    }

    if (touchStart - touchEnd < -200) {
      // do your stuff here for right swipe
      goToPreviousSlide();
    }
  }

  const handleWheel = (e) => {
    (e.deltaY > 0) ? goToNextSlide() : goToPreviousSlide();
  }


  return(
    <div className="slider" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onWheel={handleWheel}>
      {/*Image de fond*/}
      <div ref={slideImage} className="slider-bg"></div>
      {/*Navigation du slider WEB*/}
      <ul ref={slideNav} className="slider-navList">
        {categories.map((categorie) => (
          <li key={categorie.id -1}  > 
            <span onClick={useNav} className="slider-item" >{categorie.id}</span>
              {/*<span className="slider-item" > : {categorie.text}</span>*/}
          </li>
        ))}
      </ul>

      {/*Navigation du slider Mobile*/}
      <button onClick={goToPreviousSlide} className="slider__btn-left">
        <span> &#8592; </span>
      </button>

      <button onClick={goToNextSlide} className="slider__btn-right">
        <span> &#8594; </span>
      </button>

      {/*Contenu principal*/}
      <div className="slider--content container">
        <div className="slider--feature">
          {/*Technologies Utilisés*/}
          <ul className="slider-tech" ref={slideTech}></ul>
          {/*Titre du projet*/}
          <h2 ref={slideText} className="feature--title h1"> </h2>

          <h1 className="h2 slider-main-title"> Portfolio </h1>
          {/*Description du projet*/}
          <p ref={slideDesc} className="feature--text"> </p>
          {/* <button> &#8595; </button> */}
          <NavLink className="voir-button" to={categories[pSlideCounter].path}> Voir </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SliderPortfolio;