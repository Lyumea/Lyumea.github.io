import {useEffect, useState} from 'react';

//utilisation des slides
const useSliderPortfolio = (slideImage, slideText, slideDesc, slideTech, slideNav, slideLogo, images) => {
    //initiation du state à reprendre si besoin
    let [pSlideCounter, setPSlideCounter] = useState(0);

    //définition du nombre max de slide en fonction du tableau
    const max = images.length -1;

    //utilisation direct de handleSlide
    useEffect( () => {
        handleSlide(pSlideCounter);
    });

    //gestion de la navigation
    const useNav = event => {
        setPSlideCounter(event.target.textContent - 1);
    }

    //paramètre changement de slide
    const handleSlide = slide => {
        //selection de la nav
        const selected = slideNav.current.childNodes;
        for( let select of selected) {
            (select.textContent === images[slide].id) ? select.style.color = `#544147` : select.style.color = `transparent`
        }
        //Mise en place des slides
        slideImage.current.style.backgroundImage = `linear-gradient(
            to right,
            rgba(255, 241, 235, 0.9),
            rgba(255, 241, 235, 0.3)
            ), url(${images[slide].src})`;
            slideImage.current.style.backgroundPosition = `center center`;
            slideImage.current.style.backgroundSize = `cover`;
            slideText.current.innerHTML = images[slide].text;
            slideDesc.current.innerHTML = images[slide].desc;
            slideTech.current.innerHTML = images[slide].tech.join('');
            slideNav.current.childNodes[slide].style.transition = `all .5s ease`;
            slideLogo.current.src = images[slide].logo;
            
            animateSlide(slideImage)
    }

    //animation au changement de slide
    const animateSlide = () => {
        slideImage.current.classList.add("fade-in-down");
        slideText.current.classList.add("fade-in-out");
        slideTech.current.classList.add("fade-in-out");
        slideLogo.current.classList.add("fade-in-out");
        slideDesc.current.style.opacity = "0";

        setTimeout( () => {
            slideDesc.current.classList.add("fade-in-out");
        },500 )

        setTimeout(() => {
        slideImage.current.classList.remove("fade-in-down");
        slideText.current.classList.remove("fade-in-out");
        slideTech.current.classList.remove("fade-in-out");
        slideLogo.current.classList.remove("fade-in-out");
        slideDesc.current.style.opacity = "1";
        }, 1000)

        setTimeout( () => {
            slideDesc.current.classList.remove("fade-in-out");
        },2000 )
    }

    //Slide suivante
    const goToPreviousSlide = () => {
        setPSlideCounter((prevState) => (prevState === 0) ? max : prevState -1);
    }

    //Slide précédante
    const goToNextSlide = () => {
        setPSlideCounter((prevState) => (prevState === max) ? 0 : prevState + 1);
    }

    //éléments à retoutner si besoin
    return { goToPreviousSlide, goToNextSlide, useNav, pSlideCounter}
}
export default useSliderPortfolio