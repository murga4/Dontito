import React from "react";
import Trabajo1 from "../assets/pagina nexus.png"
import Trabajo2 from "../assets/Pago-facil.png"
import Trabajo3 from "../assets/Eco-bici.png"
import Trabajo4 from "../assets/UI camp pagina.png"


const Trabajos = () => {
    return (
      <div id="trabajos" name="Trabajos" className="scroll-margin">
<h2 className="text-5xl bg-[#1D1C1C] text-white sm:text-4xl pl-32 pb-10 font-bold">Trabajos</h2>
<div className=" flex h-min pb-10 sm:flex-col bg-[#1D1C1C] text-white sm:items-center pl-32 sm:pl-8 gap-16 sm:gap-6"> 
              
    <div className="flex-col text-center p-4 border-white border-2 h-96 rounded-3xl">
    <img className="w-64 rounded-xl" src= {Trabajo1} alt=""  />
        <h2 className="font-bold pt-7">Nexus Arquitectura</h2>
        <p className="pb-6"> Diseño · Desarrollo web </p>
        <a href="https://nexus-ar.com/" target="_blank" className="border-[#43E97B] border-2 p-3 pr-6 pl-6 rounded-full hover:bg-white hover:text-black hover:border-white">Ver trabajo</a>
    </div>

    <div className="flex-col text-center p-4 border-white border-2 h-96 rounded-3xl">
    <img className="w-64 h-48 rounded-xl" src= {Trabajo2} alt=""  />
        <h2 className="font-bold pt-7">Pago facil App</h2>
        <p className="pb-6"> Diseño de producto </p>
        <a href="https://www.behance.net/gallery/212005201/PAGO-FACIL-Una-mejor-experiencia" target="blank" className="border-[#43E97B] border-2 p-3 pr-6 pl-6 rounded-full hover:bg-white hover:text-black hover:border-white">Ver trabajo</a>
    </div>

    <div className="flex-col text-center p-4 border-white border-2 h-96 rounded-3xl" >
    <img className="w-64 rounded-xl" src= {Trabajo3} alt=""  />
        <h2 className="font-bold pt-7">Eco bici BA App</h2>
        <p className="pb-6"> Diseño de producto</p>
        <a href="https://www.behance.net/gallery/194756089/Eco-bici-Fomentando-el-transporte-sostenible" target="_blank" className="border-[#43E97B] border-2 p-3 pr-6 pl-6 rounded-full hover:bg-white hover:text-black hover:border-white">Ver trabajo</a>
    </div>

    <div className="flex-col text-center p-4 border-white border-2 h-96 rounded-3xl" >
    <img className="w-64 rounded-xl h-48" src= {Trabajo4} alt=""  />
        <h2 className="font-bold pt-7">UI Camp Collection</h2>
        <p className="pb-6"> Diseño UI </p>
        <a href="https://www.behance.net/gallery/209508711/UI-Camp-W24" target="_blank" className="border-[#43E97B] border-2 p-3 pr-6 pl-6 rounded-full hover:bg-white hover:text-black hover:border-white" >Ver trabajo</a>
    </div>

</div>
</div> 
    );
};

export default Trabajos;