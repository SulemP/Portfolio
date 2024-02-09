import React from "react";
import Line from './../images/Line 7 (Stroke).png'
import Style from './../styles/proyectos.module.css'
import Black from './../images/proyectos/black.jpg'
import Dessert from './../images/proyectos/desert.jpg'
import EUM from './../images/proyectos/eum.jpg'

export default function Proyectos () {
    return (
        <>
            <div id="proyectos-anchor" className={Style.proyectosAnchor}></div>
            <div id="proyectos" className={Style.proyectos}>

                <div className={Style.subtitulo}>
                    <h3 style={{ color: 'white' }}>Mis Proyectos</h3>
                    <img src={Line}></img>
                </div>

                <div className={Style.portafolio}>

                    <div className={Style.black}>

                        <div className={Style.enlace}>

                            <a  href="https://muebleseum.com/" target="_blank">

                                <div className={Style.proyecto}>
                                    <img src={EUM}></img>
                                </div>

                                <div className={Style.tools} style={{textAlign:'center'}}>
                                    <p>WordPress</p>
                                </div>
                                
                                <div className={Style.tools} style={{padding:'2px 10px 2px 10px'}}>
                                    <p>
                                        Mi primer proyecto vendido, esta página web fue creada utilizando WordPress, siendo una experiencia de aprendizaje en el uso de esta plataforma. 
                                        <br></br><br></br>
                                        Diseñada y personalizada para cumplir con los requisitos específicos del cliente, esta página demuestra mi capacidad para adaptarme y aprender nuevas tecnologías. A través de su desarrollo, adquirí habilidades en la creación de sitios web dinámicos y funcionales utilizando WordPress como plataforma de gestión de contenido.
                                    </p>
                                </div>
                            </a> 

                        </div>
                    </div>

                    <div className={Style.black}>
                        
                        <div className={Style.enlace}>

                            <a href="https://list-dessert.vercel.app/" target="_blank">

                                <div className={Style.proyecto}>
                                    <img src={Dessert}></img>
                                </div>

                                <div className={Style.tools} style={{textAlign:'center'}}>
                                    <p>React Js</p>
                                </div>

                                <div className={Style.tools} style={{padding:'2px 10px 2px 10px'}}>
                                    <p>
                                        Una aplicación construida con React.js que ofrece funcionalidades completas de un gestor de tareas (ToDo List), con énfasis en la capacidad de realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar).  
                                        <br></br><br></br>
                                        Diseñada para proporcionar una experiencia fluida y eficiente, permite a los usuarios interactuar de manera intuitiva y efectiva con los datos proporcionados.
                                    </p>
                                </div>

                            </a>
                        </div>
                    </div>

                    <div className={Style.black}>

                        <div className={Style.enlace}>

                            <a href="https://sulemp.github.io/Blackparadox/" target="_blank">

                                <div className={Style.proyecto}>
                                    <img src={Black}></img>
                                </div>

                                <div className={Style.tools} style={{textAlign:'center'}}>
                                    <p>HTML, SASS, JS</p>
                                </div>

                                <div className={Style.tools} style={{padding:'2px 10px 2px 10px'}}>
                                    <p>
                                        Este proyecto destaca por su enfoque en la estética y la experiencia del usuario, combinando la simplicidad de HTML con la potencia de SASS para lograr un diseño moderno y agradable. 
                                    </p>
                                </div>

                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}