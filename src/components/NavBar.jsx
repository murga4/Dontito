import React, { useState, useEffect } from "react";
import {Link} from "react-scroll";
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';


const NavBar = () => {

    const [ menuOpen, setMenuOpen ] = useState (false)
   const [windowDimension, setWindowDimension] = useState({
        InnerHeigt: window.innerHeight,
        innerWidth: window.innerWidth,
    }); 

    const detectSize = () => {
        setWindowDimension ({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
        });
       windowDimension.innerWidth > 700  && setMenuOpen(false);

    };

 
    useEffect (() => {
        window.addEventListener("resize", detectSize);
        return () => {
            window.addEventListener("resize", detectSize);
        };
    }, [windowDimension.innerWidth]);

    const links = [
        


        {
            id: 2,
            src: "Sobre mi",
        },
        {
            id: 3,
            src: "Trabajos",
        },
        {
            id: 4,
            src: "Contacto",
        },
     ];

     const linksToRender =
      windowDimension.innerWidth > 700 || menuOpen === true ? links : [];

    return (
     <div className={` bg-black bg-opacity-85 w-screen items-center flex fixed h-20 ${
menuOpen && "flex-col h-full"
     }`}
     style={{ zIndex: 1400 }}
    >
        
<div className={`flex items-center pl-4 ${menuOpen && "p-10" }`}>
  

   {(!menuOpen && windowDimension.innerWidth < 700) ? (
    <HiMenuAlt1 className="text-white" size={30} onClick={() => setMenuOpen(true)} cursor={"pointer"}/>
) : (
    menuOpen && windowDimension.innerWidth < 700 && <IoCloseOutline className="text-white" size={30} onClick={() => setMenuOpen(false)} cursor={"pointer"} />
)}
 <Link to="Home" smooth={500} className={` text-white cursor-pointer text-xl font-medium ${menuOpen ? "pl-10":"pl-40"}`}>IMM</Link>
</div>
<div className={
    !menuOpen
    ?"flex ml-24 gap-12 w-[80%]"
    :"flex flex-col items-center pl-4"
}
    >
      {linksToRender.map((l) => (
      <Link
        smooth={500}
        className={`relative text-white cursor-pointer ${
          !menuOpen ? "group" : "pt-10 text-xl group"
        }`}
        key={l.id}
        to={l.src}
      >
        {l.src}
        {/* Línea animada */}
        <span
          className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#43E97B] to-[#38F9D7] transition-all duration-300 group-hover:w-full"
        ></span>
      </Link>
    ))}

</div>
    </div>
    );
};

export default NavBar;