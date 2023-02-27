import React from 'react';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import { LogoFree } from './componentes/freecodecampLogo';
function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoFree  />
      <div className='tarea-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
