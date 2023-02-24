import React, {useState} from 'react';
import '../hojas-de-estilo/TareaFormulario.css';

function TareaFormulario (props){

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    
    const tareaNueva = {
      id: '34545',
      texto: input
    }
  }


  return (
    <form 
    className='tarea-formulario'
    onSubmit={manejarEnvio}>
      <input 
      className='tarea-input'
      type='texto'
      placeholder='Escribe una tarea'
      name='texto'
      onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;