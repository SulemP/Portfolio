import React from "react";
import Line from './../images/Line 7 (Stroke).png'
import './../styles/proyectos.css'

export default function Proyectos () {
    return (
        <>
            <div id="proyectos-anchor" className="proyectos-anchor"></div>
            <div id="proyectos" className="proyectos">

                <div className="subtitulo">
                    <h3 style={{ color: 'white' }}>Mis Proyectos</h3>
                    <img src={Line}></img>
                </div>
            </div>
        </>
    )
}