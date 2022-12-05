import portfolio3d from "../../hooks/portfolio3d";
import Sections from "./Sections";
import UI from "../../components/portfolio/UI";

const Section3D = () => {
    return(
        <Sections content={<UI />} images={portfolio3d} h1={"UI"} />
    )
}

export default Section3D;