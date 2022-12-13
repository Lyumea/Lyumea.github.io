import autoprotrait from "../assets/portfolio/2d/illus/autoportrait-nai.webp"

const Apropos = () =>{
    return(
        <>
            <div className="container">
                <div className="apropos">
                    <div className="apropos-text">
                        <h2>NAI</h2>
                        <p>Ces lettres sont mes initiales. En effet, cela fait maintenant 2 ans que j’exerce dans le métier du design WEB et du design UI en alternance. Grâce à cette expérience et à ma curiosité, j’ai pu apprendre de nombreuses technologies en programmation et en créativité. Je suis actuellement en alternance pour le titre professionnel Designer UX/UI et je souhaite continuer dans ce domaine à l’avenir…</p>
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