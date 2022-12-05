import webProjectList from "../hooks/pop-ups/webProjectList";

const WebGallery = (slideCounter) => {
    return(
        <>
            <h3 className="wp-popup-title">{webProjectList[slideCounter].title}</h3>
            <div className="popup-card-container">
                {webProjectList[slideCounter].src.map((link) => (
                    <div key={webProjectList[slideCounter].src.indexOf(link)} className="popup-card">
                        <img src={link} alt="" />
                    </div>
                ))}
            </div>

            <div className="pop-up-links">
                {(webProjectList[slideCounter].lienPW === '') ?  "" :  <a class="wp-popup-link" type="link" rel="noreferrer" target="_blank" href={webProjectList[slideCounter].lienPW} > Voir le projet </a> }
            </div>
        </>
    )
}

export default WebGallery;