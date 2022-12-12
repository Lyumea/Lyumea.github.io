import Spline from '@splinetool/react-spline';

const UI = ({link}) => {
    return(
        <>
            <p className="ui-desc"> chargement en cours... <br></br> {link.desc}</p>
            <Spline className={"UI " + link.class} scene={link.src} />
        </>
    );
};

export default UI;