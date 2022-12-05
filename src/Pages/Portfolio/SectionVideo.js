import portfolioVideo from "../../hooks/portfolioVideo";
import Sections from "./Sections";
import Videos from "../../components/portfolio/Videos"

const SectionVideo = () => {
    return(
        <Sections content={<Videos />} images={portfolioVideo} h1={"Vidéo"} />
    )
}
export default SectionVideo;