import React from 'react'

function MiComponente() {

  const datos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 150 },
    { id: 3, nombre: 'Producto 3', precio: 200 },
  ];

  return (<div className="container">
  <h1>¡Hola, mundo!</h1>
  <button className="btn btn-primary">Botón de Bootstrap</button>

  <h2>Ejemplo de Tabla en React</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>

</div>
  );
}

export default MiComponente;