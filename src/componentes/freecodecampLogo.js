import React from "react";
import freeCodeCampLogo from '../imagenes/freecodecamp.png';
import '../hojas-de-estilo/freecodecampLogo.css';

 export const LogoFree = () =>{
    return (
        <div className='freecodecamp-logo-contenedor'>
            <img
            src={freeCodeCampLogo}
            className='freecodecamp-logo' />
        </div>
    );
    }