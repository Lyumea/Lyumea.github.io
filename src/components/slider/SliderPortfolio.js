import React, {useRef} from "react";
import useSliderPortfolio from "../../hooks/useSliderPortfolio";
import { NavLink } from 'react-router-dom';

const SliderPortfolio = ({categories}) =>{
    const slideImage = useRef(null);
    const slideText = useRef(null);
    const slideDesc = useRef(null);
    const slideTech = useRef(null);
    const slideNav = useRef(null);
    const slideLogo = useRef(null);

    const {useNav, goToPreviousSlide, goToNextSlide, pSlideCounter} = useSliderPortfolio(
        slideImage,
        slideText,
        slideDesc,
        slideTech,
        slideNav,
        slideLogo,
        categories
    );    


    return(
        <div className="slider">

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
            <ul className="slider-tech" ref={slideTech}>
            </ul>

              {/*Titre du projet*/}
              <h1 ref={slideText} className="feature--title"> </h1>

              {/*Logo du projet*/}
              <img className="slider-logo" ref={slideLogo} alt="" />

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