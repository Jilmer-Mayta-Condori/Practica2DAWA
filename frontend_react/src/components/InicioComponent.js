import React, { Component } from 'react'
import '../styles/Inicio.css'

class InicioComponent extends Component{
    render(){
        return(
          <div>
            <h1 style={{textAlign: 'center', fontSize: '2rem', marginTop: '30px'}}>Bienvenido a mi App de Contactos</h1>
            <div class="buttons">
            <div class="containerInicioComponent">
                <p>Agregar un nuevo Contacto en la agenda</p>
                <a href="/formulario" class="btn effect01" ><span>Crear Contacto</span></a>

                <p>Listar todos mis Contactos</p>
                <a href="/listar" class="btn effect01" ><span>Mostrar Contactos</span></a>

            </div>
          </div>
        </div>
        
        );
    }
}

export default InicioComponent