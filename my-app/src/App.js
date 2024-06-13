import React from 'react';
import NavBar from "./components/NavBar";
import Home from"./components/Home";
import Trabajos from "./components/Trabajos";
import './App.css';
import AboutMe from "./components/AboutMe";
import Contact from './components/Contact';

function App() {
  return (
   <div className=" ">
<NavBar />
<Home/>
<AboutMe />
<Trabajos/>
<Contact/>
  </div>
  );
}

export default App;
