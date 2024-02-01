import React from "react";
import Line from './../images/Line 7 (Stroke).png'
import './../styles/contacto.css'

export default function Contacto () {
    return (
        <>
            <div id="contacto" className="contacto">

                <div className="subtitulo">
                    <h3 style={{ color: 'white' }}>Contácto</h3>
                    <img src={Line}></img>
                </div>
            </div>
        </>
    )
}