
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import AboutMe from "./components/AboutMe/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div  className='container'>
        <Navigation/>
        <Main/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
