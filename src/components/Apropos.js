import { Link } from "react-router-dom";
import autoprotrait from "../assets/portfolio/2d/illus/autoportrait-nai.webp"

const Apropos = () =>{
    return(
        <>
            <div className="container">
                <div className="apropos">
                    <div className="apropos-text">
                        <h2>NAI</h2>
                        <p>Après avoir fait 2 ans d'expérience dans le métier du design WEB et du design UX/UI, il est grand temps de mettre ces services à l'ouvrage! Grâce à cette expérience et à ma curiosité, j’ai pu apprendre de nombreuses technologies en programmation et en créativité.
                            Je pourrai alors vous aider dans votre communication visuel, votre stratégie marketing et la promotion de votre produit et de votre service. Vous voulez en savoir plus ? Vous pouvez voir mon Portfolio ou parlons-en m'envoyant <Link to="/contact">un petit message !</Link></p>
                    </div>

                    <div className="apropos-img">
                        <img src={autoprotrait} alt="Autoportrait NAI" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apropos;