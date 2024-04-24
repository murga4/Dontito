import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alerta } from "../funtions";
// hooks escribir componentes con estados, nos permite usar el state y el useEffect
//enganchar el estado de react y el ciclo de vida del componente
//estado asignar valor
//efec renderise




const ListaDeComponentes = ({apiData}) => {
    // const url = 'https://localhost:7130/api/Productos/listaProducto';
    const [productos, setProductos] = useState([]);
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [nombreMarca, setNombreMarca] = useState('');
    const [nombreModelo, setNombreModelo] = useState('');
    const [precio, setPrecio] = useState('');
    const [peso, setPeso] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');
    
// una vez que rendireza toda la pagina carga todos los productos
    useEffect(() => {
        axios.get("https://localhost:7130/api/Productos/listaProducto")
        .then((respuesta) => {
            setProductos(respuesta.data);
        })
        .catch((error) => {
            if (error.response) {
                // La solicitud se realizó pero el servidor respondió con un código de estado fuera del rango 2xx
                console.error("Error de respuesta:", error.response.data);
                console.error("Código de estado:", error.response.status);
            } else if (error.request) {
                // La solicitud se realizó pero no se recibió respuesta
                console.error("No se recibió respuesta del servidor:", error.request);
            } else {
                // Ocurrió un error durante la configuración de la solicitud
                console.error("Error al configurar la solicitud:", error.message);
            }
            // Mostrar un mensaje de error al usuario
            alert("Se produjo un error al intentar obtener los productos. Por favor, inténtalo de nuevo más tarde.");
        });
    },[apiData]);

    

  return (
    <div className="App">
        <div>
            <button className="btn btn-primary">Agregar Producto</button>

            <h2>Ejemplo de Tabla en React</h2>
                <table className="table">
                <thead>
                    <tr>
                    <th>#ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Nombre Marca</th>
                    <th>Nombre Modelo</th>
                    <th>Precio</th>
                    <th>Peso</th>
                    </tr>
                </thead>
                <tbody>
                    {productos?.map((producto) => (
                    <tr key={producto.id}>
                        <td>{(producto.id)}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.nombreMarca}</td>
                        <td>{producto.nombreModelo}</td>
                        <td>${producto.precio}</td>
                        <td>{producto.peso}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
        </div>


        <div className='modal fade'>

        </div>
        
    </div>
  )
}

export default ListaDeComponentes;