import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiDribbbleLogoFill } from "react-icons/pi";

const Footer = () => {
return (
    <div className="bg-black h-20 bg-opacity-95 text-white flex justify-between pl-32 pr-32 pt-8 sm:pl-8 sm:pr-8">
        <h2 className="font-bold">IMM</h2>
        <div className="flex gap-3 pr-8 sm:pr-0">
        <a href="#"><FaBehance className="hover:text-[#38F9D7]" size ={28} /></a>
       <a href="#"><FaLinkedinIn className="hover:text-[#38F9D7]" size ={26} /></a>
       <a href="#"><PiDribbbleLogoFill className="hover:text-[#38F9D7]" size ={26} /></a>
        </div>
    </div>
)
}

export default Footer;