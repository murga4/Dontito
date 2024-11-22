import React from "react";
import Dia0 from "../assets/Dia0.png";
import Dia2 from "../assets/Dia-2.jpg";
import Dia4 from "../assets/Dia4.jpg";
import Dia5 from "../assets/Dia5.jpg";
import Dia6 from "../assets/Dia6.jpg";
import Dia7 from "../assets/Dia7.jpg";
import Dia8 from "../assets/Dia8.jpg";
import Dia9 from "../assets/Dia9.jpg";
import Dia10 from "../assets/Dia10.jpg";
import Dia11 from "../assets/Dia11.jpg";
import Dia12 from "../assets/Dia12.jpg";
import Dia14 from "../assets/Desktop-1.png";
import Dia15 from "../assets/Desktop-2.png";
import Dia16 from "../assets/Nuevo-diseño.png";


function InfiniteSlider() {
  const images = [Dia0, Dia2, Dia4, Dia5, Dia6, Dia7, Dia8, Dia9, Dia10, Dia11, Dia12, Dia14, Dia15, Dia16 ]; // Array con las imágenes importadas

  return (
    <div className="overflow-hidden bg-[#1D1C1C] py-4">
      <div className="flex w-[200%] animate-scroll">
        {/* Mapeo del array de imágenes */}
        {images.map((src, index) => (
          <div key={index} className="w-64 m-2 flex-shrink-0">
            <img
              src={src}
              alt={`Slider Image ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteSlider;