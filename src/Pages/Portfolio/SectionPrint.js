import portfolioPrint from "../../hooks/portfolioPrint";
import Sections from "./Sections";
import Print from "../../components/portfolio/Print"
const SectionPrint = () => {
    return(
        <Sections content={<Print />} images={portfolioPrint} h1={"Print"} />
    )
}
export default SectionPrint;