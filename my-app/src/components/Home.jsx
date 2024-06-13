import React from "react";
import Imagen from "../assets/grupo 26.png"


const Home = () => {
return (
    <div className="pt-40 sm:grid-cols-1 sm:gap-24 sm:pt-20 h-screen grid grid-rows-2 grid-cols-2 sm:grid-rows-1 bg-[#1D1C1C]">
<div className="flex flex-col gap-6 m-4 ml-40 sm:ml-8 pt-10 md: m-10 sm:pt-0 ">
    <h2 className="text-white text-7xl sm:text-4xl font-medium">Hola! Soy Ignacio Murgades</h2>
    <p className="text-white">Un diseñador enamorado de Figma que Integra
diseño gráfico, desarrollo web y UX/UI para crear
soluciones digitales completas.</p>
<div className="flex gap-2 text-white sm:text-sm">
    <a className="text-[#1D1C1C] font-medium bg-gradient-to-r from-[#43E97B] to-[#38F9D7] p-3 rounded-full transition-all duration-700 hover:bg-color-white transform hover:scale-105 hover:text-[#1D1C1C]"  href="#">Ver Trabajos</a>
    <a className="border-white border-2 p-3 rounded-full transition-all duration-700 hover:bg-color-white transform hover:scale-105 "href="#">Contacto</a>
</div>
</div>

<div className="flex items-center justify-center sm:pt-8">
    <img className="pt-40" src= {Imagen} alt=""  />

</div>

    </div>
);
};
export default Home;