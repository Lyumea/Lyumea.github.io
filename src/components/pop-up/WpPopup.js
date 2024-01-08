import webProjectList from "../../hooks/pop-ups/webProjectList";
import styled from 'styled-components';

const MyArticle = styled.article`
    transform: ${(props) => (props.clicked ? "translateY(0) scale(1)" : "translateY(100vh) scale(0)")};
    width : ${(props) => (props.clicked ? "100%" : "0")};
    height : ${(props) => (props.clicked ? "100%" : "0")};
    border-radius : ${(props) => (props.clicked ? "0" : "100rem")};
    left : ${(props) => (props.clicked ? "0" : "50%")};
`

const MyContent = styled.div`
    transform: ${(props) => (props.clicked ? "translateY(0) scale(1)" : "translateY(100vh) scale(0)")};
    border-radius : ${(props) => (props.clicked ? "0" : "100rem")};
`


const WpPopup = ({slideCounter, close, state}) => {


    return(
        <MyArticle clicked={state} className="wp-popup" >
            <div className="wp-popup-close" onClick={close}></div>
            <MyContent clicked={state} className="wp-window">
                <button className="wp-button-popup" onClick={close}> <span className="wp-button-popup-close"> fermer </span> </button>
                <h3 className="wp-popup-title">{webProjectList[slideCounter].title}</h3>
                
                <div className="popup-card-container">
                    {webProjectList[slideCounter].src.map((link, i) => (
                        <div key={i} className="popup-card"><img src={link} alt={webProjectList[slideCounter].alt[webProjectList[slideCounter].src.indexOf(link)]} /> </div> 
                    ))}
                </div>

                <div className="pop-up-links">
                    {(webProjectList[slideCounter].lienPW === '') ?  "" :  <a class="wp-popup-link" type="link" rel="noreferrer" target="_blank" href={webProjectList[slideCounter].lienPW} > Voir le projet </a> }
                </div>
            </MyContent>
        </MyArticle>
    )
}

export default WpPopup;