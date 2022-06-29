import webProjectList from "../../hooks/pop-ups/webProjectList"

const WpPopup = ({slideCounter, close}) => {
    return(
        <article className="wp-popup" >
            <div className="wp-popup-close" onClick={close}></div>
            <div className="wp-window">
                <button className="wp-button-popup" onClick={close}> <span className="wp-button-popup-close"> fermer </span> </button>
                <h2 className="wp-popup-title">{webProjectList[slideCounter].title}</h2>
                <div className="pop-up-links">
                    {(webProjectList[slideCounter].lienPW === '') ? null :  <a href={webProjectList[slideCounter].lienPW} > Voir le projet </a> }
                    {(webProjectList[slideCounter].lienCS === '') ? null :  <a href={webProjectList[slideCounter].lienCS} > Voir le code source </a> }
                </div>
                <div className="popup-card-container">
                    {webProjectList[slideCounter].src.map((link) => (
                        <div key={webProjectList[slideCounter].src.indexOf(link)} className="popup-card">
                            <img src={link} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default WpPopup;