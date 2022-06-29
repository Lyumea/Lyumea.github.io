import LogoNai from "../components/3d/logo/LogoNai";
import Clouds from "./../components/Clouds";
import "../Styles/_mixins.scss";

export default function Home(){

        return(
            <header className="home-header">
            <div className="img-clouds cloud2"></div>
            <h1 className="home-main-title"> NAI • Creative</h1>
            <LogoNai />
            <div className="img-clouds cloud1"></div>
            <Clouds 
            cloudClassName="cloud home-cloud" />
            </header>
        )
}