import React from "react";
import Style from "./../styles/introduccion.module.css";
import Sulem from './../images/Sulem.png'
import Dots from './../images/Dots.png'
import Logo from './../images/Logo.png'

export default function Introduccion() {
  const sulemText = "Sulem";
  const desarrollo = "desarrollo front-end";

  return (
    <div id="inicio" className={`${Style.introduccion}`}>
      <div className={Style.introduccionColumna}>
        <h1>
          Soy <span className={Style.highlightText}>{sulemText}</span> y me
          especializo en dar vida a diseños web a través del{" "}
          <span className={Style.highlightText}>{desarrollo}</span>
        </h1>

        <p>Apasionada por descubrir nuevas tecnologías y técnicas</p>
        <a href="https://wa.me/525548971683?text=¡Hola%2C%20Sulem!%20¿Cómo%20estás%3F" target="_blank">
          <button>Contáctame</button>
        </a>
      </div>

      <div className={Style.introduccionSulem}>
        <center>
            <p className={Style.platzi}>Foto tomada por Platzi <br></br>en sus oficinas</p>
            <img className={Style.logoIntro} src={Logo}></img>
            <img className={Style.imgSulem} src={Sulem}></img>
            <img className={Style.dotsIntro} src={Dots}></img>
        </center>
      </div>
    </div>
  );
}
