import React from "react";
import Line from './../images/Line 7 (Stroke).png'
import Style from './../styles/contacto.module.css'
import IN from './../images/logotipo-de-linkedin.png'
import Git from './../images/tecnologias/github.png'
import Email from './../images/email.png'
import WA from './../images/whatsapp.png'

export default function Contacto () {

    const handleClick = (e) => {
        e.preventDefault();
        const correo = "sulem.pastrana96@outlook.com";
        navigator.clipboard.writeText(correo);
        alert("¡La dirección de correo electrónico se ha copiado al portapapeles!");
    }

    return (
        <>
            <div id="contacto" className={Style.contacto}>

                <div className={Style.subtitulo}>
                    <h3 style={{ color: 'white' }}>Contácto</h3>
                    <img src={Line}></img>
                </div>

                <div className={Style.columns}>
                    <div className={Style.left}>
                        <div className={Style.rectangulo}>
                            <p>
                                Estoy entusiasmada por expandir mis conocimientos y crecer profesionalmente en el campo del desarrollo web. 
                                <br></br><br></br>
                                En busca de oportunidades para formar parte de una empresa dinámica y orientada al crecimiento, donde pueda aplicar mis habilidades y aprender de un equipo experimentado.
                            </p>
                        </div>
                        
                    </div>

                    <div className={Style.right}>

                        <div className={Style.redes}>

                            <a href="https://www.linkedin.com/in/sulem-pastrana-343839217/" target="_blank">
                                <div>
                                    <img src={IN}></img>
                                    <p>LinkedIn</p>
                                </div> 
                            </a>

                            <a href="https://github.com/SulemP" target="_blank">
                                <div>
                                    <img src={Git}></img>
                                    <p>GitHub</p>
                                </div>
                            </a>
                            

                            <div onClick={handleClick}>
                                <a href="#">
                                    <img src={Email} alt="Correo"></img>
                                    <p>Email</p>
                                </a>
                            </div>

                            <a href="https://wa.me/525548971683?text=¡Hola%2C%20Sulem!%20¿Cómo%20estás%3F" target="_blank">
                                <div>
                                    <img src={WA} alt="WhatsApp"></img>
                                    <p>WhatsApp</p>
                                </div>
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}