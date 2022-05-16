import {useEffect} from 'react';

//utilisation des slides
const useSlider = (slideImage, slideText, slideDesc, slideTech, slideNav, slideLogo, images) => {
    let slideCounter = 0;

    useEffect( () => {
        startSlider();
    
    });

    //mise en place du slide avec l'image en fond
    const startSlider =() => {

        slideImage.current.style.backgroundImage =  `linear-gradient(
            to right,
            rgba(255, 241, 235, 0.9),
            rgba(255, 241, 235, 0.3)
            ), url(${images[0].src})`;
        slideImage.current.style.backgroundPosition = `right bottom`;
        slideImage.current.style.backgroundSize = `cover`;
        slideImage.current.style.backgroundRepeat = `no-repeat`;

            slideText.current.innerHTML = images[0].text;
            slideDesc.current.innerHTML = images[0].desc;
            slideTech.current.innerHTML = images[0].tech.join('');
            slideNav.current.childNodes[0].style.color = `#544147`;
            slideNav.current.childNodes[0].style.transition = `all .5s ease`;
            slideLogo.current.src = images[0].logo;

    }

    const useNav = event => {
        slideCounter = event.target.textContent;
        handleSlide(event.target.textContent);
        let selected = slideNav.current.childNodes[slideCounter-1];
        (selected.style.color === `#544147`) ? (selected.style.color = `transparent`) : (selected.style.color = `#544147`);
        slideNav.current.childNodes[0].style.transition = `all .5s ease`;
        //selected.style.color = `#544147`;
        //console.log(selected);
        //const tech = images[listContent-1].tech;
    }


    //paramètre changement de slide
    const handleSlide = slide => {
        
        slideImage.current.style.backgroundImage = `linear-gradient(
            to right,
            rgba(255, 241, 235, 0.9),
            rgba(255, 241, 235, 0.3)
            ), url(${images[slide - 1].src})`;
            slideText.current.innerHTML = images[slide - 1].text;
            slideDesc.current.innerHTML = images[slide - 1].desc;
            slideTech.current.innerHTML = images[slide - 1].tech.join('');

            //console.log(slide-1);
            //console.log(images[slide-1].id-1);
            slideNav.current.childNodes[slide - 1].style.transition = `all .5s ease`;
            slideLogo.current.src = images[slide - 1].logo;

         
            animateSlide(slideImage)
    }

    //animation au changement de slide
    const animateSlide = () => {
        slideImage.current.classList.add("fadeIn");
        slideText.current.classList.add("fade-in-out");
        slideTech.current.classList.add("fade-in-out");
        slideLogo.current.classList.add("fade-in-out");
        slideDesc.current.style.opacity = "0";

        const navList = slideNav.current.childNodes;
        for (let i = 0; i < navList.length; i++) {
            if(!navList[i].style.color === `transparent`) {
                navList[i].style.color = `#544147`;
            }
            else{
                navList[i].style.color = `transparent`;
            }
        }

        setTimeout( () => {
            slideDesc.current.classList.add("fade-in-out");
        },500 )

        setTimeout(() => {
        slideImage.current.classList.remove("fadeIn");
        slideText.current.classList.remove("fade-in-out");
        slideTech.current.classList.remove("fade-in-out");
        slideLogo.current.classList.remove("fade-in-out");
        slideDesc.current.style.opacity = "1";
        }, 1000)

        setTimeout( () => {
            slideDesc.current.classList.remove("fade-in-out");
        },2000 )
    }

    const goToPreviousSlide = () => {

        if (slideCounter === 0) {
        handleSlide(images.length)
        slideCounter = images.length;
        }
        handleSlide(slideCounter)
        slideCounter--;
        }

    const goToNextSlide = () => {
        if (slideCounter === images.length - 1) {
          startSlider()
          slideCounter = -1;
          animateSlide(slideImage)
        }

        slideImage.current.style.backgroundImage = `linear-gradient(
            to right,
            rgba(255, 241, 235, 0.9),
            rgba(255, 241, 235, 0.3)
            ), url(${images[slideCounter + 1].src})`;;
            slideText.current.innerHTML = images[slideCounter + 1].text;
            slideDesc.current.innerHTML = images[slideCounter + 1].desc;
            slideTech.current.innerHTML = images[slideCounter + 1].tech.join('');
            slideLogo.current.src = images[slideCounter + 1].logo;  

            slideCounter++;
            animateSlide(slideImage)
    }

    return { goToPreviousSlide, goToNextSlide, useNav}
}
export default useSlider