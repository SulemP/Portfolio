// import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Style from './styles/global.module.css';
import MenuComponent from './components/MenuComponent';
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
        <MenuComponent/>
        <Introduccion/>
        <SobreMi/>
        <Tecnologias/>
        <Habilidades/>
        <Proyectos/>
        <Extras/>
        <Contacto/>
      </div>
    </>
  );
}

export default App;