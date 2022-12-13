import portfolio2d from "../../hooks/portfolio2d";
import Sections from "./Sections";
import Graphisme from "../../components/portfolio/Graphisme";
import { useEffect } from "react";

const Section2D = () => {

    useEffect(() => {
        document.title = 'Graphismes - Portfolio | NAI';
    }, []);


    return(
        <Sections content={<Graphisme />} images={portfolio2d} h1={"Graphisme"}/>
    )
}

export default Section2D;