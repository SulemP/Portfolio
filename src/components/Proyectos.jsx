import React from "react";
import Line from './../images/Line 7 (Stroke).png'
import Style from './../styles/proyectos.module.css'

export default function Proyectos () {
    return (
        <>
            <div id="proyectos-anchor" className={Style.proyectosAnchor}></div>
            <div id="proyectos" className={Style.proyectos}>

                <div className={Style.subtitulo}>
                    <h3 style={{ color: 'white' }}>Mis Proyectos</h3>
                    <img src={Line}></img>
                </div>
            </div>
        </>
    )
}