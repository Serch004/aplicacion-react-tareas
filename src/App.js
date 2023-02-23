import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp.png';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo' />
      </div>
      <div className='tarea-lista-principal'>
        <hi>Mis Tareas</hi>
        
      </div>
    </div>
  );
}

export default App;
