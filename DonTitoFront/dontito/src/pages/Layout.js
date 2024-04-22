import React from 'react'
import {  Outlet,NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                {/* Con esto vamos a redireccionar */}
                <li>
                    <NavLink end  to = "/">Home</NavLink>
                </li>
                <li>
                    <NavLink  to = "/about">About</NavLink>
                </li>
                <li>
                    <NavLink  to = "/dashboard">Dashboard</NavLink>
                </li>
            </ul>
        </nav>
        <hr/>
        {/* Con esta etiqueta se van a renderizar todas nuestras paginas */}
        <Outlet/> 
    </div>
  )
}

export default Layout