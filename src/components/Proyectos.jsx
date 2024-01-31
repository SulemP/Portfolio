import React from "react";
import Line from './../images/Line 7 (Stroke).png'
import './../styles/proyectos.css'

export default function Proyectos () {
    return (
        <div className="proyectos">

            <div className="subtitulo">
                <h3 style={{ color: 'white' }}>Mis Proyectos</h3>
                <img src={Line}></img>
            </div>
        </div>

    )
}