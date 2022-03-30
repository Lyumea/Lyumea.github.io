//import react from "react";

export default function Contact(){
    return(
        <div className="contact">

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            
            <div className="container contact-form">
             <div>
             <h1>Me Contacter</h1>
             <p> Un projet ? Une demande ? Ou même juste un petit message ? Contactez-moi !  </p>
            </div>   
            <form>
                <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label> Nom </label>
                </div>

                <div className="group">
                    <input type="email" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label> E-Mail </label>
                </div>

                <div className="group">
                    <textarea />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label> Votre Message </label>
                </div>

                <div>
                    <button><span> Envoyer </span></button>
                </div>
            </form>
        </div>
        </div>
    )
}