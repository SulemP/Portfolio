import React from "react";
import Line from './../images/Line 7 (Stroke).png'
import './../styles/tecnologias.css'

export default function Tecnologias () {
    return (
        <>
            <div id="tecnologias" className="tecnologias">

                <div className="subtitulo">
                    <h3 style={{ color: 'white' }}>Tecnologías</h3>
                    <img src={Line}></img>
                </div>

                <div className="tecnologias-columns">
                    <div className="column-left"></div>

                    <div className="column-right">

                        <div>
                            <table className="tablaFrame">
                                <tbody>
                                    <tr>
                                        <td style={{color:'white', textAlign:'center'}}>Frameworks</td>
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
                            <table className='tablaLenguajes'>
                                <tbody>
                                    <tr>
                                        <td style={{color:'white', textAlign:'center'}}>Lenguajes</td>
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
                            <table className="tablaOtros">
                                <tbody>
                                    <tr>
                                        <td style={{color:'white', textAlign:'center'}}>Otros</td>
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
                            <table className="tablaHerramientas">
                                <tbody>
                                    <tr>
                                        <td style={{color:'white', textAlign:'center'}}>Herramientas</td>
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