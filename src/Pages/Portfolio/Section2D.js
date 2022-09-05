import Carousel from "../../hooks/Carousel";
import portfolio2d from "../../hooks/portfolio2d";

const Section2D = () => {
    return(
        <div className="portfolio2d">
            <h1 className="container">Portfolio 2D</h1>
            <div className="p-logos carousel-container">
                <div><h2 className="container">Logos</h2></div>
                    <Carousel show={4} infiniteLoop > 
                        {
                            portfolio2d[0].logos.map((logo) => (
                               <div key={logo.id} className="test2dcar"> {logo.miniature} </div>
                            ))
                        }
                    </Carousel>
            </div>
            <div className="p-illu carousel-container">
                <div><h2 className="container">illustrations</h2></div>
                <Carousel show={4} infiniteLoop > 
                    {
                        portfolio2d[0].illustrations.map((illu) => (
                            <div key={illu.id} className="test2dcar"> {illu.miniature} </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className="p-pixelArt carousel-container">
                <div><h2 className="container">UI</h2></div>
                <Carousel show={4} infiniteLoop > 
                    {
                        portfolio2d[0].UIs.map((ui) => (
                            <div key={ui.id} className="test2dcar"> {ui.miniature} </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Section2D;