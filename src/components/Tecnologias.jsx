import React from "react";
import Style from './../styles/tecnologias.module.css'
// import './../styles/tecnologias.css'
import Line from './../images/Line 7 (Stroke).png'
import CSS from './../images/tecnologias/archivo-css.png'
import Branch from './../images/tecnologias/git.png'
import JS from './../images/tecnologias/javascript.png'
import GitHub from './../images/tecnologias/github.png'
import Code from './../images/tecnologias/code.png'
import ReactLogo from './../images/tecnologias/react.png'
import Dots from './../images/Dots.png'

import SobreMi from "./SobreMi";

export default function Tecnologias () {
    return (
        <>
            <div id="tecnologias" className={Style.tecnologias}>

                <div className={Style.subtitulo}>
                    <h3 style={{ color: 'white' }}>Tecnologías</h3>
                    <img src={Line}></img>
                </div>

                <div className={Style.tecnologiasColumns}>

                    <div className={Style.columnLeft}>
                        <img className={Style.cssImg} src={CSS}></img>
                        <img className={Style.git}src={GitHub}></img>
                        <img className={Style.branch} src={Branch}></img>
                        <img className={Style.JS} src={JS}></img>
                        <img className={Style.code} src={Code}></img>
                        <img className={Style.react} src={ReactLogo}></img>
                        <img className={Style.dots} src={Dots}></img>
                        <img className={Style.dots2} src={Dots}></img>

                    </div>

                    <div className={Style.columnRight}>

                        <div>
                            <table className={Style.tablaFrame}>
                                <tbody>
                                    <tr>
                                        <td style={{color:'white', textAlign:'center', padding:'5px',}}>Frameworks</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>React Js</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <table className={Style.tablaLenguajes}>
                                <tbody>
                                    <tr>
                                        <td style={{color:'white', textAlign:'center', padding:'5px',}}>Lenguajes</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Javascript</p>
                                            <p>PHP</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <table className={Style.tablaOtros}>
                                <tbody>
                                    <tr>
                                        <td style={{color:'white', textAlign:'center', padding:'5px',}}>Otros</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>HTML</p>
                                            <p>CSS</p>
                                            <p>SASS</p>
                                            <p>Redux</p>
                                            <p>MySQL</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <table className={Style.tablaHerramientas}>
                                <tbody>
                                    <tr>
                                        <td style={{color:'white', textAlign:'center', padding:'5px',}}>Herramientas</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Figma</p>
                                            <p>Visual Studio Code</p>
                                            <p>Git</p>
                                            <p>Notion</p>
                                            <p>Bootstrap</p>
                                            <p>Material UI</p>
                                            <p>Jira</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}