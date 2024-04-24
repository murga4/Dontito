import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


//creamos una funcion exportable sirve para mostrar alertas


export function show_alerta(mensaje,icono,foco){
    
    onfocus(foco);

    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title:mensaje,
        icon:icono
    });
  
}

function onfocus(foco){
    if(foco !== ' '){
        document.getElementById(foco).focus();
    }
}


//en un solo archivo tenemos todas las funciones que vamos a necesitar y la vamos exportando cuando las necesitemos
