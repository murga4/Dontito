import React from "react";
import Imagen from "../assets/grupo 26.png"

const Home = () => {
return (
    <div name="Home" className="pt-32 sm:grid-cols-1 sm:gap-8 sm:pt-10 h-min grid grid-rows-1 grid-cols-2 sm:grid-rows-1 bg-[#1D1C1C]">
<div className="flex flex-col gap-6 m-4 ml-40 sm:ml-8 pt-10 md:m-10">
    <h2 className="text-white text-7xl sm:text-4xl font-medium sm:font-bold ">Hola! Soy Ignacio Murgades</h2>
    <p className="text-white">Un diseñador enamorado de Figma que Integra
diseño gráfico, desarrollo web y UX/UI para crear
soluciones digitales completas.</p>
<div className="flex gap-2 text-white sm:text-sm">
    <a className="text-[#1D1C1C] hover:bg-white hover:text-black font-medium bg-gradient-to-r from-[#43E97B] to-[#38F9D7] p-4 pl-6 pr-6 rounded-full"  href="#Trabajos">Ver Trabajos</a>
    <a className="border-white border-2 p-4 rounded-full hover:bg-white pl-6 pr-6 hover:text-black" target="blank" href="mailto:ignaciomurgades@gmail.com">Contacto</a>
</div>
</div>

<div className="flex items-center justify-center">
    <img className="" src= {Imagen} alt=""  />

</div>

    </div>
);
};
export default Home;