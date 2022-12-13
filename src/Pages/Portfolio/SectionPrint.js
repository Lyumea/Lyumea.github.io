import portfolioPrint from "../../hooks/portfolioPrint";
import Sections from "./Sections";
import Print from "../../components/portfolio/Print"
import { useEffect } from "react";
const SectionPrint = () => {

    useEffect(() => {
        document.title = 'Print - Portfolio | NAI';
    }, []);

    return(
        <Sections content={<Print />} images={portfolioPrint} h1={"Print"} />
    )
}
export default SectionPrint;