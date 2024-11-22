import React from 'react';
import NavBar from "./components/NavBar";
import Home from"./components/Home";
import Carousel from "./components/Carousel";
import Trabajos from "./components/Trabajos";
import './App.css';
import AboutMe from "./components/AboutMe";
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
   <div className=" ">
<NavBar />
<Home/>
<Carousel/>
<AboutMe />
<Trabajos/>
<Contact/>
<Footer/>
  </div>
  );
}

export default App;
