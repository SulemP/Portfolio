import React from "react";
import Line from './../images/Line 7 (Stroke).png'
import Huella from './../images/extras/patas.png'
import Plantas from './../images/extras/hoja-de-la-planta.png'
import Amor from './../images/extras/amar.png'
import Ave from './../images/extras/strelitzia.png' 
import Ori from './../images/extras/bailarin.png'
import Style from './../styles/extras.module.css'

export default function Extras () {
    return (
        <div id="extras" className={Style.extras}>

            <div className={Style.subtitulo}>
                <h3 style={{ color: 'white' }}>Extras</h3>
                <img src={Line}></img>
            </div>

            <div>
                <img className={Style.huella} src={Huella}></img>
                {/* <img className={Style.plantas} src={Plantas}></img> */}
                <img className={Style.amor} src={Amor}></img>
                <img className={Style.ave} src={Ave}></img>
                <img className={Style.ori} src={Ori}></img>
                <p>
                    Permíteme contarte un poco más sobre mí fuera del ámbito profesional. Soy una apasionada del aprendizaje y siempre estoy buscando nuevas experiencias que amplíen mis horizontes. Aunque no soy una dibujante ni pintora profesional, encuentro gran satisfacción en pintar objetos de madera y sumergirme en manualidades creativas en mi tiempo libre.
                </p>
                <br></br>
                <p>
                    Una de mis grandes pasiones es el baile, en particular el Ori Tahiti, también conocido como la danza hawaiana. Me siento profundamente conectada con su cultura y disfruto cada momento que paso practicando esta hermosa forma de expresión artística que va desde las coreografías, hasta el crear mis propios vestuarios para las competencias que realizo con mi grupo a nivel nacional.
                </p>
                <br></br>
                <p>
                    Mi amor por los animales es innegable; compartir mi vida con mi adorable perrita es una fuente constante de alegría y compañerismo. Pasar tiempo con mi familia y amigos es fundamental para mí; valoro cada momento que puedo compartir con ellos, ya sea explorando nuevos lugares juntos o simplemente disfrutando de una tarde tranquila en casa.
                </p>

            </div>
            <br></br>

            <p className={Style.gracias}>¡Gracias por visitar mi página y conocer un poco más sobre mí!</p>

        </div>

    )
}