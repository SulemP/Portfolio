import React, { useState } from "react";
import Line from './../images/Line 7 (Stroke).png'
import Rectangle from './../images/Rectangle 24.png'
import Dots from './../images/Dots.png'
import Logo from './../images/Logo.png'
import './../styles/habilidades.css'

export default function Habilidades () {
    return (
        <div id="habilidades" className="habilidades">

            <div className="subtitulo">
                <h3 style={{ color: 'white' }}>Habilidades</h3>
                <img src={Line}></img>
            </div>

            <img className="dots" src={Dots}></img>
            <img className="rectangle" src={Rectangle}></img>
            <img className="logo" src={Logo}></img>
            <img className="dots2" src={Dots}></img>

            <div className="habilidades-list">
                <div>
                    <p>Adaptabilidad</p>
                    <p>Ética de trabajo</p>
                </div>
            
                <div style={{ marginTop: "2rem"}}>
                    <p>Autodidacta</p>
                    <p>Resolución de problemas</p>
                    <p>Persistencia</p>
                </div>
                
                <div style={{ marginTop: "2rem"}}>
                    <p>Comunicación afectiva</p>
                    <p>Aprendizaje continuo</p>
                </div>
            </div>

        </div>

    )
}

