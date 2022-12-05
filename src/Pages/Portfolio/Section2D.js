import portfolio2d from "../../hooks/portfolio2d";
import Sections from "./Sections";
import Graphisme from "../../components/portfolio/Graphisme";

const Section2D = () => {
    return(
        <Sections content={<Graphisme />} images={portfolio2d} h1={"Graphisme"}/>
    )
}

export default Section2D;