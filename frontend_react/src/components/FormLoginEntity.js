import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const FormularioComponent = props => {

    let history = useHistory();

    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [entidades, setEntidades] = useState([])
    const [entity, setEntity] = useState({})

    useEffect(() => {
      callEntity()
      localStorage.setItem('user', JSON.stringify(entity));
      
    });
    
    const callEntity = () =>{
      axios.get('http://localhost:3000/api/entidad')
            .then(response => {
              setEntidades(response.data)
            })
            .catch((error)=>{
            console.log("Error Peticion");
            console.log(error.toString());
      });
    }

    const onClickSubmit = (event) =>{
        event.preventDefault()

        entidades.map((entidad) => {
          if (entidad.mail === correo  && entidad.password === contraseña){
            setEntity(entidad)
            console.log("Logeo Correcto")
          }else{
            console.log("Logeo INCorrecto")
          }
        })
    }

    const onChangeCorreo= (event) =>{
        const newCorreo = event.target.value
        setCorreo(newCorreo)
    }

    const onChangeContraseña = (event) =>{
        const newPassword = event.target.value
        setContraseña(newPassword)
    }

    const localCall = () => {
      const holamundo = JSON.parse(localStorage.getItem('user'));
      console.log(holamundo)
    }

    return(   
    <div className="container">
        <div >
        <br></br>
        <form onSubmit={onClickSubmit}>

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Correo Contacto</label>
                <input type="text" className="form-control" value={correo} onChange={onChangeCorreo} name="correo"/>
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña Contacto</label>
                <input type="text" className="form-control" value={contraseña} onChange={onChangeContraseña} name="contraseña"/>
            </div>

            <button id='form-create-contact-button' type="submit" className="btn btn-primary">Log In</button>

            <p>{entity.name}</p>
        </form>
        <button id='form-create-contact-button' onClick={localCall} className="btn btn-primary">ASwed In</button>
        </div>

    </div>

    );
}

export default FormularioComponent