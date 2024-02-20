import React from "react";
import Style from './../styles/tecnologias.module.css'
import Line from './../images/Line 7 (Stroke).png'
import CSS from './../images/tecnologias/archivo-css.png'
import Branch from './../images/tecnologias/git.png'
import JS from './../images/tecnologias/javascript.png'
import GitHub from './../images/tecnologias/github.png'
import Code from './../images/tecnologias/code.png'
import ReactLogo from './../images/tecnologias/react.png'
import Dots from './../images/Dots.png'

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

                    <div className={Style.list}>

                        <div>
                            <ul style={{paddingLeft:'1rem'}}>
                                <li style={{color: 'white',fontWeight: 'bold', fontSize:'1.2rem'}}>Lenguajes</li>
                                <li>Java Script</li>
                                <li>PHP</li>

                                <li style={{color: 'white',fontWeight: 'bold', fontSize:'1.2rem', marginTop: '1rem'}}>Herramientas</li>
                                <li>Figma</li>
                                <li>Visual Studio Code</li>
                                <li>Git</li>
                                <li>Notion</li>
                                <li>Bootstrap</li>
                                <li>Material UI</li>
                                <li>Jira</li>
                            </ul>
                        </div>

                        <div>
                            <ul style={{paddingLeft:'1rem'}}>
                                <li style={{color: 'white',fontWeight: 'bold', fontSize:'1.2rem'}}>FrameWork</li>
                                <li>React Js</li>

                                <li style={{color: 'white',fontWeight: 'bold', fontSize:'1.2rem', marginTop: '2.5rem'}}>Otros</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SASS</li>
                                <li>Redux</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}