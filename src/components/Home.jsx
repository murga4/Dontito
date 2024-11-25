import React from "react";
import Imagen from "../assets/imagen pagina.png";
import Typewriter from "../components/Typewriter"; 
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="Home" className="pt-32 sm:grid-cols-1 sm:pt-10 h-min grid grid-rows-1 grid-cols-2 sm:grid-rows-1 bg-[#1D1C1C]">
            <div className="flex flex-col gap-6 m-4 ml-40 sm:ml-8 pt-10 md:m-10">
                <h2 className="text-white text-9xl sm:text-4xl font-medium sm:font-bold">
                    <Typewriter text='HHola!Soy Ignacio Murgades' speed={150} />
                </h2>
                <p className="text-white">
                    Un diseñador activo y versatil especializado Figma que integra diseño gráfico, desarrollo web y UX/UI para crear
                    soluciones digitales completas.
                </p>
                <div className="flex gap-2 text-white sm:text-sm">
                <Link
  to="Trabajos"
  smooth={500}
  
  offset={-70}   // Opcional: ajusta para compensar un header fijo
>
  <button className="px-8 z-30 py-4 bg-gradient-to-r from-[#43E97B] to-[#38F9D7] rounded-full text-[#1D1C1C] relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:text-black">
    Ver trabajos
  </button>
</Link>
         <a href="mailto:ignaciomurgades@gmail.com">
  <button className="px-8 z-30 py-4 border-white border-2 rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:text-black">
    Contacto
  </button>
</a>

                </div>
            </div>
            <div className="flex items-center justify-center">
                <img className="" src={Imagen} alt="" />
            </div>
        </div>
    );
};

export default Home;
