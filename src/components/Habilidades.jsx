import React, { useState } from "react";
import Line from './../images/Line 7 (Stroke).png'
import './../styles/habilidades.css'

export default function Habilidades () {
    return (
        <div className="habilidades">

            <div className="subtitulo">
                <h3 style={{ color: 'white' }}>Habilidades</h3>
                <img src={Line}></img>
            </div>

            <div className="habilidades-list">
                <div>
                    <p>Adaptabilidad</p>
                    <p>Ética de trabajo</p>
                </div>
            
                <div>
                    <p>Autodidacta</p>
                    <p>Resolución de problemas</p>
                    <p>Persistencia</p>
                </div>
                
                <div>
                    <p>Comunicación afectiva</p>
                    <p>Aprendizaje continuo</p>
                </div>
            </div>

        </div>

    )
}

