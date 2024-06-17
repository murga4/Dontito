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
    ?"flex justify-evenly w-[80%]"
    :"flex flex-col items-center pl-4"
}
    >
    {linksToRender.map((l) => (
        <Link
        smooth={500}
        className={!menuOpen ? " text-white cursor-pointer" : " cursor-pointer text-white pt-10 text-xl"}
         key={l.id} to ={l.src}>{l.src}</Link>
    ))}

</div>
    </div>
    );
};

export default NavBar;