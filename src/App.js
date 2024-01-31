import './App.css';
import './styles/global.css';
import Menu from './components/Menu';
import Introduccion from './components/Introduccion';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';

function App() {
  return (
    <>
      <div className='app-container'>
        <Menu/>
        <Introduccion/>
        <SobreMi/>
        <Proyectos/>
        <Habilidades/>
      </div>
    </>
  );
}

export default App;