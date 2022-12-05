import Spline from '@splinetool/react-spline';

const UI = ({link}) => {
    return(
        <Spline className={"UI " + link.class} scene={link.src} />
    );
};

export default UI;