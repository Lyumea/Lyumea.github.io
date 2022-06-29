//import logo from './logo.svg';
import './App.scss';
import {Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './components/basic/Menu';
import MenuWebProject from './Pages/Menus/MenuWebProject';
import MenuPortfolio from './Pages/Menus/MenuPortfolio';
import Contact from './Pages/Contact';




function App() {
  return (
    <div className="App">
      
      <Menu />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/web-projects" element={ <MenuWebProject /> } />
        <Route path="/portfolio" element={ <MenuPortfolio /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>


    </div>
  );
}

export default App;
