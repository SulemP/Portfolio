import React, {useState} from "react";
import Style from "./../styles/sobremi.module.css";
import Line from './../images/Line 7 (Stroke).png'

export default function SobreMi() {

    const [more, setMore] = useState(false)

    const showMore = () => {
        setMore(!more)
    }

    return (
        <div id="acerca-de" className={Style.sobremiContainer}>
            <div className={Style.subtitulo}>
                <h3 style={{ color: 'white' }}>Acerca de mí</h3>
                <img src={Line}></img>
            </div>

            <div className={Style.sobremiColumn}>

                <div className={Style.sobremiLeft}>
                </div>

                <div className={Style.sobremiRight}>

                    <div>
                        <p>
                            ¡Hola! Soy <span className={Style.highlightText}>Sulem Pastrana</span>, apasionada de la creación web con 27 años de edad. Me encanta sumergirme en el mundo del desarrollo digital y actualmente me especializo en el front-end utilizando <span className={Style.highlightText}>React.js</span>.
                            Sin embargo, mi sed de conocimiento me impulsa a ampliar mis
                            habilidades tanto en el front-end como en el back-end.
                        </p>

                        <p>
                            Soy egresada de la carrera de <span className={Style.highlightText}>Ingeniería en Informática en UPIICSA</span>, donde adquirí una sólida base en los fundamentos de la informática y
                            el desarrollo de software. Actualmente, me encuentro inmersa en un <span className={Style.highlightText}>curso de inglés</span> para mejorar mis habilidades lingüísticas y estoy comprometida en obtener mi título universitario, trabajando diligentemente en los procesos necesarios para lograrlo.
                        </p>

                        <p>
                            Mi objetivo es seguir creciendo profesionalmente y contribuir al
                            mundo del desarrollo web con soluciones innovadoras y eficientes.
                            Estoy emocionada por las oportunidades que el futuro tiene
                            reservadas y estoy decidida a aprovecharlas al máximo.
                        </p>
                    </div>

                    {
                        more && (
                            <div className={Style.showMore}>
                                <div className={Style.experiencia}>
                                    <img src={Line}></img>
                                    <h2 className={Style.texto}>Mi experiencia profesional</h2>
                                    <img src={Line}></img>
                                </div>
                                
                                <div>
                                    <h4 className={Style.highlightText}>INEIN Infraestructura e Interiores:</h4>
                                    <p style={{ color: 'white' }}>Agosto 2022 - Octubre 2023</p>
                                    <p>
                                        En mi anterior puesto, me desempeñé en el desarrollo de la plataforma interna ERP/CRM de la empresa. Mis responsabilidades incluyeron la creación de nuevos módulos y funcionalidades, así como la corrección de errores y la optimización del código existente. También tuve la oportunidad de elaborar manuales de uso para facilitar la comprensión y adopción de la plataforma por parte de los usuarios. Durante este tiempo, trabajé con tecnologías avanzadas como React.js, SASS, Redux, Material UI y Bootstrap, entre otras.
                                    </p> 
                                     
                                </div>

                                <div>
                                    <h4 className={Style.highlightText}>DIVUM Clínica cosmética de rostro y dientes:</h4>
                                    <p style={{ color: 'white' }}>Agosto 2021 - Julio 2022</p>
                                    <p>
                                        En mi primer trabajo, contribuí a la creación de una Landing Page para el proyecto Rinex. Esta página fue diseñada para aumentar el alcance de clientes, utilizando tecnologías como HTML, CSS y JavaScript para garantizar una experiencia de usuario atractiva y funcional.
                                    </p>   
                                </div>

                                <div>
                                    <h4 className={Style.highlightText}>Prácticas Profesionales BUSCALAB:</h4>
                                    <p style={{ color: 'white' }}>Abril 2021 - Julio 2021</p>
                                    <p>
                                        Durante mis prácticas profesionales, tuve la oportunidad de adquirir experiencia en el diseño y maquetación de interfaces utilizando herramientas como Figma. Además, participé activamente en el desarrollo y mantenimiento de páginas web responsivas, donde implementé interacciones de usuario utilizando JavaScript, así como la integración de bases de datos MySQL y PHP.
                                    </p>  
                                </div>
                                 
                            </div>
                            
                        )
                    }

                    <div className={Style.button}>
                        <button onClick={showMore}>
                            { more ? "Ver Menos": "Experiencia Profesional"}
                        </button>
                    </div>
                    

                </div>
            </div>
        </div>
  );
}
