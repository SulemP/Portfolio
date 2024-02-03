import React, { useState } from "react";
import Line from './../images/Line 7 (Stroke).png'
import Rectangle from './../images/Rectangle 24.png'
import Dots from './../images/Dots.png'
import Logo from './../images/Logo.png'
import Style from './../styles/habilidades.module.css'

export default function Habilidades () {
    return (
        <div id="habilidades" className={Style.habilidades}>

            <div className={Style.subtitulo}>
                <h3 style={{ color: 'white' }}>Habilidades</h3>
                <img src={Line}></img>
            </div>

            <img className={Style.dots} src={Dots}></img>
            <img className={Style.rectangle} src={Rectangle}></img>
            <img className={Style.logo} src={Logo}></img>
            <img className={Style.dots2} src={Dots}></img>

            <div className={Style.habilidadesList}>
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

