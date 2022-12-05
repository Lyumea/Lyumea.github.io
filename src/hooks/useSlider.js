import {useEffect, useState} from 'react';

//utilisation des slides avec comme paramètres les éléments utilisés
const useSlider = (slideImage, slideText, slideDesc, slideTech, slideNav, slideLogo, images ) => {
    let [wSlideCounter, setWSlideCounter] = useState(0);

    //définition du nombre max de slides
    const max = images.length -1;
    
    //Commencement du slide
    useEffect (() =>{
        handleSlide(wSlideCounter);
    })

    //gestion de la navigation
    const useNav = event => {
        setWSlideCounter(event.target.textContent - 1);
    }

    //paramètre changement de slide
    const handleSlide = slide => {
        const selected = slideNav.current.childNodes;
        for( let select of selected) {
            (select.textContent === images[slide].id) ? select.style.color = `#544147` : select.style.color = `transparent`
        }

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

        //stade des animations de base
        slideImage.current.classList.add("fadeIn");
        slideText.current.classList.add("fade-in-out");
        slideTech.current.classList.add("fade-in-out");
        slideLogo.current.classList.add("fade-in-out");
        slideDesc.current.style.opacity = "0";

        //fin d'animation dans les 0.5s
        // setTimeout( () => {
        //     slideDesc.current.classList.add("fade-in-out");
        // },500 )

        //fin d'animation dans les 1s
        setTimeout(() => {
        slideImage.current.classList.remove("fadeIn");
        slideText.current.classList.remove("fade-in-out");
        slideTech.current.classList.remove("fade-in-out");
        slideLogo.current.classList.remove("fade-in-out");
        slideDesc.current.style.opacity = "1";
        }, 1000)

        //fin d'animation dans les 2s
        setTimeout( () => {
            slideDesc.current.classList.remove("fade-in-out");
        },2000 )

    }

    //slide suivante
    const goToPreviousSlide = () => {
        setWSlideCounter((prevState) => (prevState === 0) ? max : prevState -1);
    }

    //slide précédante
    const goToNextSlide = () => {
        setWSlideCounter((prevState) => (prevState === max) ? 0 : prevState + 1);
    }


    //valeurs et fonctions à retourner si besoin
    return { goToPreviousSlide, goToNextSlide, useNav, wSlideCounter}
}
export default useSlider