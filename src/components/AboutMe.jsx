import React from "react";
 
const AboutMe = () => {
    return (
<div name="Sobre mi" className=" sm:grid-cols-1 h-min grid grid-rows-1 grid-cols-2 pt-8 pb-20 sm:pb-12 gap-10 sm:gap-5 sm:grid-rows-1 bg-[#1D1C1C]">

<div className="text-white pl-32 sm:pl-8">
    <h2 className="text-5xl text-white pb-6 sm:pt-8 sm:text-4xl font-bold sm:pt-4">Sobre Mi</h2>
    <p className="pb-3 pr-4">Soy un estudiante avanzado de la carrera de diseño
en comunicación visual con un sólido dominio del software
Adobe Illustrator, y además de las areas de diseño brindadas
por la carrera (Branding, packaging, redes sociales, diseño editorial,
etc.), cuento también con conocimientos en diseño UX/UI y web.</p>
<a className="font-bold hover:underline" target="blank" href="https://drive.google.com/file/d/1v8fOyYRO6blt6ATJ10Jbl2BeBI9QWDno/view?usp=sharing">Ver CV</a>
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