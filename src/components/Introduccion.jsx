import React from "react";
import "./../styles/introduccion.css";
import Sulem from './../images/Sulem.png'
import Dots from './../images/Dots.png'
import Logo from './../images/Logo.png'

export default function Introduccion() {
  const sulemText = "Sulem";
  const desarrollo = "desarrollo front-end";

  return (
    <div className="introduccion">
      <div className="introduccion-columna">
        <h1>
          Soy <span className="highlight-text">{sulemText}</span> y me
          especializo en dar vida a diseños web a través del{" "}
          <span className="highlight-text">{desarrollo}</span>
        </h1>
        <p>Apasionada por descubrir nuevas tecnologías y técnicas</p>
        <button>Contáctame</button>
      </div>

      <div className="introduccion-columna">
        <center>
            <img className="logo" src={Logo}></img>
            <img className="imgSulem" src={Sulem}></img>
            <img className="dots" src={Dots}></img>
        </center>
      </div>
    </div>
  );
}
