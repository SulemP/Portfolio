import React, { useState, useEffect } from "react";
import "./../styles/menu.css";

export default function Menu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70; // Es el espacio que habrá entre entre en menú y mi módulo
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset; // window.pageYOffset da la cantidad de desplazamiento vertical actual de la página
      window.scrollTo({ top: y, behavior: 'smooth' }); // behavior: 'smooth' indica que queremos un desplazamiento suave, es decir, con animación.
    }
  };

  return (
    <>
      <header className={`menu ${scrolled ? "scrolled" : ""}`}>

        <p className={`sulem ${scrolled ? "dark" : ""}`}>Sulem</p>

        <nav className="menu-list">

          <ul className={`color ${scrolled ? "dark" : ""}`}>
            <button onClick={() => scrollToSection("inicio")}>Inicio</button>
            <button onClick={() => scrollToSection("acerca-de")}>Acerca de mí</button>
            <button onClick={() => scrollToSection("tecnologias")}>Tecnologías</button>
            <button onClick={() => scrollToSection("proyectos")}>Proyectos</button>
            <button onClick={() => scrollToSection("habilidades")}>Habilidades</button>
            <button onClick={() => scrollToSection("extras")}>Extras</button>
            <button onClick={() => scrollToSection("contacto")}>Contácto</button>
          </ul>


        </nav>
        
      </header>
    </>
  );
}
