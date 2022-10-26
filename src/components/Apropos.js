import autoprotrait from "../assets/img/nai/default.png"

const Apropos = () =>{
    return(
        <>
            <div className="container">
                <div className="apropos">
                    <div className="apropos-text">
                        <h2>NAI</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam a at egestas pharetra scelerisque. Magna ut pharetra, sagittis nunc elementum penatibus eget mauris dolor. Enim porta aenean euismod dictum consequat. Scelerisque fringilla pretium nec, bibendum elit erat interdum etiam. Eget ligula quis mi elementum feugiat arcu tellus sed nunc. Turpis feugiat mauris at lectus volutpat. Nisl mi nibh aliquet morbi varius eu.</p>
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