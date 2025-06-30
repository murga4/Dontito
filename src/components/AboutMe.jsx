import React from "react";
 
const AboutMe = () => {
    return (
<div name="Sobre mi" className=" sm:grid-cols-1 h-min grid grid-rows-1 grid-cols-2 pt-8 pb-20 sm:pb-12 gap-10 sm:gap-5 sm:grid-rows-1 bg-[#1D1C1C]">

<div className="text-white pl-32 sm:pl-8">
    <h2 className="text-5xl text-white pb-6 sm:pt-8 sm:text-4xl font-bold sm:pt-4">Sobre Mi</h2>
    <p className="pb-3 pr-4">Soy un diseñador en comunicación visual con un gran interés en el diseño de productos.
         Mi enfoque está en crear experiencias visuales que no solo sean atractivas, sino también funcionales y eficaces 
         para resolver problemas.
Me considero una persona curiosa, versátil y proactiva, siempre en busca de nuevas herramientas que me permitan mejorar la calidad de mis servicios. Gracias a mi interés continuo por aprender, he adquirido conocimientos en HTML y CSS, lo que me permite construir páginas web usables y colaborar de manera eficaz con equipos de desarrollo.
</p>
<a
  className="relative font-bold text-white cursor-pointer group"
  target="blank"
  href="https://drive.google.com/file/d/1yHj6f9g3nGyA7Y0jRzal3quZ4OLnC_o8/view?usp=sharing"
>
  Ver CV
  {/* Línea animada */}
  <span
    className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#43E97B] to-[#38F9D7] transition-all duration-300 group-hover:w-full"
  ></span>
</a>

</div>
<div className="text-white pr-40 sm:pr-0 pt-5 pl-8">
<h4 className=" font-medium text-2xl pb-4">Capacidades</h4>
    <div className="flex gap-1 flex-wrap pt-1 text-sm" >
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">Diseño Grafico</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">Diseño UX/UI</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">Diseño Web</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">Branding</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">Figma</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">Illustrator</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">Photoshop</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">After Efects</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">HTML</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">CSS</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">JavaScript</p>
        <p className="border-white border-2 p-2 rounded-full hover:text-[#38F9D7]">Trabajo en equipo</p>


</div>
</div>
</div>

    )
}

export default AboutMe;