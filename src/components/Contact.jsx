import React from "react";
import ContactoImagen from "../assets/contacto.png";

const Contact = () => {
    return (
        <div id="#Contacto" name="Contacto" className="bg-[#1D1C1C] pl-32 pb-8 pt-8 sm:pl-8 sm:pt-4">
            <h2 className="text-5xl text-white pb-6 sm:pt-0 sm:text-4xl font-bold">Contacto</h2>
<div className="bg-[#1D1C1C] h-min grid grid-rows-1 grid-cols-2 sm:grid-cols-1 pt-4 ">
    <img className=" " src= {ContactoImagen} alt="" />
    <div className="text-white pt-24 sm:pt-8">
   <h2 className="text-3xl font-bold pb-2 sm:text-2xl">Hablemos</h2>
   <p className="pr-32 pb-4 sm:pr-2 mb-4">Estoy disponible para responder cualquier duda o solicitud que tengas. Haz clic en el botón a continuación para enviarme un email.</p>
   <a className="p-4 border-2 pl-6 pr-6 rounded-full border-[#43E97B] hover:bg-white hover:text-black hover:border-white" href="mailto:ignaciomurgades@gmail.com" >Contactar por Mail</a>
   </div>
</div>
</div>
    )
}

export default Contact;