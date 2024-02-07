// import React, { useState, useRef } from "react";
// import Style from "./../styles/sobremi.module.css";
// import Line from './../images/Line 7 (Stroke).png'
// import IPN from './../images/ipn.png'

// import { Chart } from 'react-chartjs-2';
// import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

// ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

// <Chart type='line' data={miData} />

// const habilidades = ["H1", "H2", "H3", "H4"]
// const nivel = [1,2,3,4,5]

// const miData = {
//     labels: ["Agosto 2021 - Julio 2022", "Agosto 2022 - Octubre 2023", "Abril 2021 - Julio 2021"],
//     datasets: [
//       {
//         label: "Nivel de Experiencia",
//         data: [2, 4, 3], // Aquí proporciona los niveles de experiencia correspondientes a cada período de tiempo
//         fill: true,
//         borderColor: '#C778DD',
//         tension: 0.5,
//         pointRadius: 5,
//         pointBorderColor: 'red'
//       }
//     ]
//   };
  

// export default function SobreMi() {

//     const [more, setMore] = useState(false)
//     const tecnologiasRef = useRef(null) //useRef es un hook que me ayuda a crear una referencia(apodo,nombre) con la propiedad .current. Es como si creara una id para reconocer un elemento y poder modificarlo directamente con el DOM

//     const showMore = (props) => {
//         setMore(!more) 
//         if(!more && tecnologiasRef.current){
//             tecnologiasRef.current.scrollIntoView({behavior: 'smooth'}) // .scrollIntoView es un método de JavaScript que se utiliza para hacer que un elemento del DOM sea visible dentro del contenedor que lo contiene
//         }
//     }

//     return (
//         <div id="acerca-de" className={Style.sobremiContainer}>
//             <div className={Style.subtitulo}>
//                 <h3 style={{ color: 'white' }}>Acerca de mí</h3>
//                 <img src={Line}></img>
//             </div>

//             <div className={Style.sobremiColumn}>

//                 <div className={Style.sobremiLeft}>
//                     <img className="ipn" src={IPN}></img>

//                     {
//                         more && (
//                             <div> 
//                                 <Line data={miData}/>
//                             </div>
//                         )
//                     }
//                 </div>

//                 <div className={Style.sobremiRight}>

//                     <div>
//                         <p>
//                             ¡Hola! Soy <span className={Style.highlightText}>Sulem Pastrana</span>, apasionada de la creación web con 27 años de edad. Me encanta sumergirme en el mundo del desarrollo digital y actualmente me especializo en el front-end utilizando <span className={Style.highlightText}>React.js</span>.
//                             Sin embargo, mi sed de conocimiento me impulsa a ampliar mis
//                             habilidades tanto en el front-end como en el back-end.
//                         </p>

//                         <p>
//                             Soy egresada de la carrera de <span className={Style.highlightText}>Ingeniería en Informática en UPIICSA</span>, donde adquirí una sólida base en los fundamentos de la informática y
//                             el desarrollo de software. Actualmente, me encuentro inmersa en un <span className={Style.highlightText}>curso de inglés</span> para mejorar mis habilidades lingüísticas y estoy comprometida en obtener mi título universitario, trabajando diligentemente en los procesos necesarios para lograrlo.
//                         </p>

//                         <p>
//                             Mi objetivo es seguir creciendo profesionalmente y contribuir al
//                             mundo del desarrollo web con soluciones innovadoras y eficientes.
//                             Estoy emocionada por las oportunidades que el futuro tiene
//                             reservadas y estoy decidida a aprovecharlas al máximo.
//                         </p>
//                     </div>

//                     {
//                         more && (
//                             <div className={Style.showMore}>
//                                 <div className={Style.experiencia}>
//                                     <img src={Line}></img>
//                                     <h2 className={Style.texto}>Mi experiencia profesional</h2>
//                                     <img src={Line}></img>
//                                 </div>
                                
//                                 <div>
//                                     <h4 className={Style.highlightText}>INEIN Infraestructura e Interiores:</h4>
//                                     <p style={{ color: 'white' }}>Agosto 2022 - Octubre 2023</p>
//                                     <p>
//                                         En mi anterior puesto, me desempeñé en el desarrollo de la plataforma interna ERP/CRM de la empresa. Mis responsabilidades incluyeron la creación de nuevos módulos y funcionalidades, así como la corrección de errores y la optimización del código existente. También tuve la oportunidad de elaborar manuales de uso para facilitar la comprensión y adopción de la plataforma por parte de los usuarios. Durante este tiempo, trabajé con tecnologías avanzadas como React.js, SASS, Redux, Material UI y Bootstrap, entre otras.
//                                     </p> 
                                     
//                                 </div>

//                                 <div>
//                                     <h4 className={Style.highlightText}>DIVUM Clínica cosmética de rostro y dientes:</h4>
//                                     <p style={{ color: 'white' }}>Agosto 2021 - Julio 2022</p>
//                                     <p>
//                                         En mi primer trabajo, contribuí a la creación de una Landing Page para el proyecto Rinex. Esta página fue diseñada para aumentar el alcance de clientes, utilizando tecnologías como HTML, CSS y JavaScript para garantizar una experiencia de usuario atractiva y funcional.
//                                     </p>   
//                                 </div>

//                                 <div>
//                                     <h4 className={Style.highlightText}>Prácticas Profesionales BUSCALAB:</h4>
//                                     <p style={{ color: 'white' }}>Abril 2021 - Julio 2021</p>
//                                     <p>
//                                         Durante mis prácticas profesionales, tuve la oportunidad de adquirir experiencia en el diseño y maquetación de interfaces utilizando herramientas como Figma. Además, participé activamente en el desarrollo y mantenimiento de páginas web responsivas, donde implementé interacciones de usuario utilizando JavaScript, así como la integración de bases de datos MySQL y PHP.
//                                     </p>  
//                                 </div>
                                 
//                             </div>
                            
//                         )
//                     }

//                     <div className={Style.button}>
//                         <button onClick={showMore}>
//                             { 
//                             more ? "Ver Menos": "Experiencia Profesional"}
//                         </button>
//                     </div>
                    

//                 </div>
                
//             </div>
//         </div>
//   );
// }


import React, { useState, useRef } from "react";
import Style from "./../styles/sobremi.module.css";
import LineImage from './../images/Line 7 (Stroke).png'
import IPNImage from './../images/ipn.png'

import { Chart } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { CategoryScale, Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title);

const habilidades = ["H1", "H2", "H3", "H4"]
const nivel = [10,200,3,4,5]

const miData = {
    labels: ["D", "DF", "DB", "DR", "DA"], // Asegúrate de proporcionar etiquetas de categoría
    datasets: [
        {
            label: 'Nivel de Experiencia',
            data: [3, 4, 1, 3, 4, 5], // Aquí proporciona los niveles de experiencia correspondientes a cada período de tiempo
            fill: true,
            borderColor: '#C778DD',
            tension: 0.5,
            pointRadius: 5,
            pointBorderColor: '#ABB2BF'
        }
    ]
};


export default function SobreMi() {
    const [more, setMore] = useState(false)
    const tecnologiasRef = useRef(null) 

    const showMore = (props) => {
        setMore(!more) 
        if(!more && tecnologiasRef.current){
            tecnologiasRef.current.scrollIntoView({behavior: 'smooth'}) 
        }
    }

    return (

        <div id="acerca-de" className={Style.sobremiContainer}>
            <div className={Style.subtitulo}>
                <h3 style={{ color: 'white' }}>Acerca de mí</h3>
                <img src={LineImage} alt="Line"></img>
            </div>

            <div className={Style.sobremi}>

                <div className={Style.sobremiLeft}>
                    <img className="ipn" src={IPNImage} alt="IPN"></img>
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

                    <div className={Style.button}>
                        <button onClick={showMore}>
                            { 
                            more ? "Ver Menos": "Experiencia Profesional"}
                        </button>
                    </div> 

                </div>

            </div>


            <div className={Style.sobremi}>

                <div className={Style.experienciaLeft}>

                    {
                        more && (
                            <div> 
                                <h4>Herramientas</h4>

                                <p style={{marginBottom:'5rem'}}>
                                    <span>D</span> (Figma, WordPress)<br></br>
                                    <span>DF</span> (HTML, CSS, JavaScript)<br></br>
                                    <span>DB</span> (MySQL, PHP)<br></br>
                                    <span>DR</span> (React.js, Redux)<br></br>
                                    <span>DA</span> (SASS, Material UI, Bootstrap)
                                </p>

                                {/* <Chart type='line' data={miData}/> */}
                                <Chart type='line' data={miData} options={{
                                    scales: {
                                        y: {
                                            
                                            ticks: {
                                                color: 'white' 
                                            }
                                        },
                                        x: {
                                            
                                            ticks: {
                                                color: 'white'
                                            }
                                        }
                                    }
                                }}/>

                                <h4 style={{marginTop:'5rem'}}>Dominio</h4>

                                <p>
                                    1: Básico
                                    2: Intermedio
                                    3: Avanzado
                                    4: Experto
                                    5: Maestro
                                </p>
                            </div>
                        )
                    }
                </div>

                <div className={Style.sobremiRight}>

                    <div>
                    {
                        more && (
                            <div className={Style.showMore}>
                                <div className={Style.experiencia}>
                                    <img src={LineImage} alt="Line"></img>
                                    <h2 className={Style.texto}>Mi experiencia profesional</h2>
                                    <img src={LineImage} alt="Line"></img>
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
                    </div>

                </div>
                
            </div>
        </div>
    );
}

