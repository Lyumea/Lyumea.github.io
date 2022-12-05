import React, {useState} from "react";
import PortfolioPopup from "../pop-up/PortfolioPopup"

const Videos = (link) => {

    const [popUp, setPopUp] = useState(false);
    //active la modale
    const setPopUpTrue = () => {
      setPopUp(true);
    }
    //ferme la modale
    const setPopUpFalse = () => {
      setPopUp(false);
    }
  

    return(
        <div className="video-container" >
            { Object.values(link).map((lien, i) => (
                <div key={i}>
                    <div className="video-button">
                        <button onClick={setPopUpTrue}> Découvrir la vidéo </button>
                        <PortfolioPopup close={setPopUpFalse} slideCounter={lien.id-1} state={popUp} />
                    </div>
                    <img className="video-gif" src={lien.gif} alt={lien.desc} />
                </div>                    
            ))}
        </div>
    );
};

export default Videos;
