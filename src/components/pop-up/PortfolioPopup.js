import PortfolioVideo from "../../hooks/portfolioVideo";
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


const PortfolioPopup = ({slideCounter, close, state}) => {
    return(
        <MyArticle clicked={state} className="wp-popup" >
            <div className="wp-popup-close" onClick={close}></div>
            <MyContent clicked={state} className="wp-window-video">
                {/* <button className="wp-button-popup" onClick={close}> <span className="wp-button-popup-close"> fermer </span> </button>
                <h3 className="wp-popup-title">{PortfolioVideo[slideCounter].nom}</h3> */}
                <video controls className="popup-video-container">
                    <source src={PortfolioVideo[slideCounter].webm} alt={PortfolioVideo[slideCounter].desc} type="video/webm" />
                </video>
            </MyContent>
        </MyArticle>
    )
}

export default PortfolioPopup;