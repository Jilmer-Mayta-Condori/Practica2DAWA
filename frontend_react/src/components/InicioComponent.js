import React from 'react'

const InicioComponent = () => {
    return(
      <div>
        <h1 style={{textAlign: 'center', fontSize: '2rem', marginTop: '30px'}}>Bienvenido a mi App de Contactos</h1>
        <div className="buttons">
        <div className="containerInicioComponent">
            <p>Crear Entidad</p>
            <a href="/formSigInEntity" className="btn effect01" ><span>Sing Up Entidad</span></a>

            <p>Logearme con mi entidad</p>
            <a href="/formLoginEntity" className="btn effect01" ><span>Sing In Entity</span></a>

            <p>Sing In Entity</p>
            <a href="/listar" className="btn effect01" ><span>Mostrar Entitys</span></a>

        </div>
      </div>
    </div>
    
    );

}

export default InicioComponent