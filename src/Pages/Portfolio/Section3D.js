import portfolio3d from "../../hooks/portfolio3d";
import Sections from "./Sections";
import UI from "../../components/portfolio/UI";
import { useEffect } from "react";

const Section3D = () => {

    useEffect(() => {
        document.title = 'UI - Portfolio | NAI';
    }, []);

    return(
        <Sections content={<UI />} images={portfolio3d} h1={"UI"} />
    )
}

export default Section3D;