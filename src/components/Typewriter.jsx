import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false); // Nuevo estado para verificar cuando el texto esté completo

    useEffect(() => {
        setDisplayedText(""); // Reinicia el texto antes de comenzar
        setIsComplete(false); // Reinicia el estado de completado
        let index = 0;

        const interval = setInterval(() => {
            if (index < text.length -1) {
                setDisplayedText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(interval); // Detiene el intervalo cuando el texto está completo
                setIsComplete(true); // Actualiza el estado indicando que ha terminado
            }
        }, speed);

        return () => clearInterval(interval); // Limpieza en caso de que el componente se desmonte
    }, [text, speed]);

    return (
        <span className={`text-white text-6xl font-semibold ${isComplete ? '' : 'cursor-blink'}`}>
            {displayedText}
            <span className="animate-blink">|</span>
        </span>
    );
};

export default Typewriter;


/*import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <span className="text-white text-2xl font-semibold">
            {displayedText}
            <span className="animate-blink">|</span>
        </span>
    );
};

export default Typewriter;
 */