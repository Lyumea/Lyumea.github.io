import portfolioVideo from "../../hooks/portfolioVideo";
import Sections from "./Sections";
import Videos from "../../components/portfolio/Videos"
import { useEffect } from "react";

const SectionVideo = () => {

    useEffect(() => {
        document.title = 'Vidéos - Portfolio | NAI';
    }, []);

    return(
        <Sections content={<Videos />} images={portfolioVideo} h1={"Vidéo"} />
    )
}
export default SectionVideo;