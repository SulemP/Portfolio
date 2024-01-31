import React from "react";
import './../styles/menu.css'

export default function menu(){
    return (
        <>
                <header className="menu">
                <p className="sulem">Sulem</p>

                    <nav className="menu-list">
                        <ul >
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#acerca-de">Acerca de mí</a></li>
                            <li><a href="#contacto">Proyectos</a></li>
                            <li><a href="#contacto">Habilidades</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                </header>
        </>
    )
}