import React from "react";
 
const AboutMe = () => {
    return (
<div className=" sm:grid-cols-1 h-min grid grid-rows-1 grid-cols-2 pb-20 gap-10 sm:gap-5 sm:grid-rows-1 bg-[#1D1C1C]">

<div className="text-white pl-32 sm:pl-8">
    <h2 className="text-5xl text-white pb-6 sm:pt-16 sm:text-4xl font-bold">Sobre Mi</h2>
    <p className="pb-3 pr-2">Soy un estudiante avanzado de la carrera de diseño
en comunicación visual con un sólido dominio del software
Adobe Illustrator, y además de las areas de diseño brindadas
por la carrera (Branding, packaging, redes sociales, diseño editorial,
etc.), cuento también con conocimientos en diseño UX/UI y web.</p>
<a className="font-bold" href="#">Descargar CV</a>
</div>
<div className="text-white pr-40 sm:pr-0 pt-5 pl-8">
<h4 className=" font-medium text-2xl pb-4">Capacidades</h4>
<div className="flex gap-1 flex-wrap pt-1 text-sm" >
<p className="border-white border-2 p-2 rounded-full">Diseño Grafico</p>
<p className="border-white border-2 p-2 rounded-full">Diseño UX/UI</p>
<p className="border-white border-2 p-2 rounded-full">Diseño Web</p>
<p className="border-white border-2 p-2 rounded-full">Branding</p>
<p className="border-white border-2 p-2 rounded-full">Figma</p>
<p className="border-white border-2 p-2 rounded-full">Illustrator</p>
<p className="border-white border-2 p-2 rounded-full">Photoshop</p>
<p className="border-white border-2 p-2 rounded-full">After Efects</p>
<p className="border-white border-2 p-2 rounded-full">HTML</p>
<p className="border-white border-2 p-2 rounded-full">CSS</p>
<p className="border-white border-2 p-2 rounded-full">JavaScript</p>
<p className="border-white border-2 p-2 rounded-full">Trabajo en equipo</p>



</div>
</div>
</div>

    )
}

export default AboutMe;