import React from "react";
import Line from './../images/Line 7 (Stroke).png'
import Style from './../styles/contacto.module.css'

export default function Contacto () {
    return (
        <>
            <div id="contacto" className={Style.contacto}>

                <div className={Style.subtitulo}>
                    <h3 style={{ color: 'white' }}>Contácto</h3>
                    <img src={Line}></img>
                </div>
            </div>
        </>
    )
}