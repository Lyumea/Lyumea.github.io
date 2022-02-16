//import react from "react";
import LogoNai from "../components/3d/logo/LogoNai";
import Clouds from "./../components/Clouds";

export default function Home(){
    return(
        <header className="home-header">
        <h1 className="home-main-title"> NAI • Creative</h1>
        <LogoNai />
        <Clouds cloudClassName="cloud home-cloud" />
        </header>
    )
}