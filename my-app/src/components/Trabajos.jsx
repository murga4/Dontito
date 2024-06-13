import React from "react";
import Trabajo1 from "../assets/pagina nexus.png"
import Trabajo2 from "../assets/pago facil.png"
import Trabajo3 from "../assets/ecobici.png"

const Trabajos = () => {
    return (
      <div>
<h2 className="text-5xl bg-[#1D1C1C] text-white sm:text-4xl pl-32 pb-10 font-bold">Trabajos</h2>
<div className=" flex h-min pb-10 sm:flex-col bg-[#1D1C1C] text-white sm:items-center pl-32 sm:pl-8 gap-16 sm:gap-6"> 

    <div className="flex-col text-center p-4 border-white border-2 h-96 rounded-3xl">
    <img className="w-64 rounded-xl" src= {Trabajo1} alt=""  />
        <h2 className="font-bold pt-7">Nexus Arquitectura</h2>
        <p className="pb-6"> Diseño · Desarrollo web </p>
        <a href="#" className="border-[#43E97B] border-2 p-3 rounded-full">Ver trabajo</a>
    </div>

    <div className="flex-col text-center p-4 border-white border-2 h-96 rounded-3xl">
    <img className="w-64 rounded-xl" src= {Trabajo1} alt=""  />
        <h2 className="font-bold pt-7">Nexus Arquitectura</h2>
        <p className="pb-6"> Diseño · Desarrollo web </p>
        <a href="#" className="border-[#43E97B] border-2 p-3 rounded-full">Ver trabajo</a>
    </div>


    <div className="flex-col text-center p-4 border-white border-2 h-96 rounded-3xl" >
    <img className="w-64 rounded-xl" src= {Trabajo2} alt=""  />
        <h2 className="font-bold pt-7">Nexus Arquitectura</h2>
        <p className="pb-6"> Diseño · Desarrollo web </p>
        <a href="#" className="border-[#43E97B] border-2 p-3 rounded-full">Ver trabajo</a>
    </div>


    <div className="flex-col text-center p-4 border-white border-2 h-96 rounded-3xl" >
    <img className="w-64 rounded-xl h-48" src= {Trabajo3} alt=""  />
        <h2 className="font-bold pt-7">Nexus Arquitectura</h2>
        <p className="pb-6"> Diseño · Desarrollo web </p>
        <a href="#" className="border-[#43E97B] border-2 p-3 rounded-full">Ver trabajo</a>
    </div>

</div>
</div> 
    );
};

export default Trabajos;