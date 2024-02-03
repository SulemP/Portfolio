// import './App.css';
import Style from './styles/global.module.css';
import Menu from './components/Menu';
import Introduccion from './components/Introduccion';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
import Extras from './components/Extras';
import Contacto from './components/Contacto';
import Tecnologias from './components/Tecnologias';

function App() {
  return (
    <>
      <div className={Style.appContainer}>
        <Menu/>
        <Introduccion/>
        <SobreMi/>
        <Tecnologias/>
        <Proyectos/>
        <Habilidades/>
        <Extras/>
        <Contacto/>
      </div>
    </>
  );
}

export default App;