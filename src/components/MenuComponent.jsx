import React, { useState, useEffect } from "react";
import Style from "./../styles/menu.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const idMap = [{
  'Inicio': '#inicio',
  'Acerca de mí': '#acerca-de',
  'Tecnologías': '#tecnologias',
  'Proyectos': '#proyectos',
  'Habilidades': '#habilidades',
  'Extras': '#extras',
  'Contácto': '#contacto',
}]

const ITEM_HEIGHT = 48;

export default function MenuComponent() {

  //Icono de Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
    handleClose();
    switch (option) {
      case 'Inicio':
        scrollToSection('#inicio');
        break;
      case 'Acerca de mí':
        scrollToSection('#acerca-de');
        break;
      case 'Tecnologías':
        scrollToSection('#tecnologias');
        break;
      case 'Proyectos':
        scrollToSection('#proyectos');
        break;
      case 'Habilidades':
        scrollToSection('#habilidades');
        break;
      case 'Extras':
        scrollToSection('#extras');
        break;
      case 'Contácto':
        scrollToSection('#contacto');
        break;
      default:
        break;
    }
  };

  // const scrollMenu = (id) => {
  //   const element = document.querySelector(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  ////////////////////////////////////////////

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
      handleClose();
    }
  };

  return (
    <>
      <header className={`${Style.menu} ${scrolled ? Style.scrolled : ""}`}>

        <p className={`${Style.sulem} ${scrolled ? Style.dark : ""}`}>Sulem</p>

      <div className={Style.options}>

        <MenuIcon
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          style={{ color: '#C778DD' }}
        >
          <MoreVertIcon />
        </MenuIcon>

        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
              backgroundColor: '#282c34',
              color:'#C778DD',
            },
          }}
        >
          <MenuItem onClick={() => scrollToSection("inicio")}>Inicio</MenuItem>

          <MenuItem onClick={() => scrollToSection("acerca-de")}>Acerca de mí</MenuItem>

          <MenuItem onClick={() => scrollToSection("tecnologias")}>Tecnologías</MenuItem>

          <MenuItem onClick={() => scrollToSection("proyectos")}>Proyectos</MenuItem>

          <MenuItem onClick={() => scrollToSection('habilidades')}>Habilidades</MenuItem>

          <MenuItem onClick={() => scrollToSection('extras')}>Extras</MenuItem>

          <MenuItem onClick={() => scrollToSection('contacto')}>Contácto</MenuItem>

        </Menu>

      </div>

        <nav className={Style.menuList}>
        
          <ul className={`${Style.color} ${scrolled ? Style.dark : ""}`}>
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
