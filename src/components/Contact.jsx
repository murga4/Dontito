import React from "react";
import ContactoImagen from "../assets/contacto.png";

const Contact = () => {
    return (
        <div id="#Contact" name="Contacto" className="bg-[#1D1C1C] pl-32 pb-8 pt-8 sm:pl-8 sm:pt-4">
            <h2 className="text-5xl text-white pb-6 sm:pt-0 sm:text-4xl font-bold">Contacto</h2>
<div className="bg-[#1D1C1C] h-min grid grid-rows-1 grid-cols-2 sm:grid-cols-1 pt-4 ">
    <img className=" " src= {ContactoImagen} alt="" />
    <div className="text-white pt-24 sm:pt-8">
   <h2 className="text-3xl font-bold pb-2 sm:text-2xl">Hablemos</h2>
   <p className="pr-32 sm:pr-2 mb-4">Estoy disponible para responder cualquier duda o solicitud que tengas. Haz clic en el botón a continuación para enviarme un email.</p>
<a href="mailto:ignaciomurgades@gmail.com">
   <button className="px-8 z-30 py-4 border-white border-2 rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:text-black" href="mailto:ignaciomurgades@gmail.com">
                        Contactar por Mail
                    </button>
                    </a>
   </div>
</div>
</div>
    )
}

export default Contact;