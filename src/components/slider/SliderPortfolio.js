import React, {useRef, useState} from "react";
import useSliderPortfolio from "../../hooks/useSliderPortfolio";
import { NavLink } from 'react-router-dom';
// import { useSwipeable } from "react-swipeable";

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

  return(
    <div className="slider" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onWheel={handleWheel}>
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