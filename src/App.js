//import logo from './logo.svg';
import './App.scss';
import {Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './components/basic/Menu';
import MenuWebProject from './Pages/Menus/MenuWebProject';
import MenuPortfolio from './Pages/Menus/MenuPortfolio';
import Contact from './Pages/Contact';
import Section2D from './Pages/Portfolio/Section2D';
import Section3D from './Pages/Portfolio/Section3D';
import SectionPrint from './Pages/Portfolio/SectionPrint';
import SectionVideo from './Pages/Portfolio/SectionVideo';




function App() {
  return (
    <div className="App">
      
      <Menu />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/web-projects" element={ <MenuWebProject /> } />
        <Route path="/portfolio" element={ <MenuPortfolio /> } />
        <Route path="/portfolio/graphisme" element={ <Section2D /> } />
        <Route path="/portfolio/ui" element={ <Section3D /> } />
        <Route path="/portfolio/print" element={ <SectionPrint /> } />
        <Route path="/portfolio/video" element={ <SectionVideo /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>

    </div>
  );
}

export default App;
