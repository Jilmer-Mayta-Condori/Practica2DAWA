import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const CreateEntityComponent = props => {

    let history = useHistory();

    const [nombre, setNombre] = useState('')
    const [numero, setNumero] = useState('')
    const [correo, setCorreo] = useState('')
    const [documento, setDocumento] = useState('')
    const [contraseña, setContraseña] = useState('')

    const onClickSubmit = (event) =>{
        event.preventDefault()
        let datos ={
            name : nombre,
            number : numero,
            mail: correo,
            identity_document: documento,
            password: contraseña,
        }
        axios.post('http://localhost:3000/api/entidad', datos)
            .then(res=>{
            setNumero('')
            setNombre('')
            setCorreo('')
            setDocumento('')
            setContraseña('')
            window.alert(`Su entidad fue creada exitosamente`);
            history.push('/listar')
        }).catch((error)=>{
            console.log("Entidad No CReado");
            console.log(error.toString());
        });

    }

    const onChangeNombre = (event) => {
        const newNombre = event.target.value
        setNombre(newNombre)
    }

    const onChangeNumero = (event) =>{
        const newNumber = event.target.value
        setNumero(newNumber)
    }

    const onChangeCorreo= (event) =>{
        const newCorreo = event.target.value
        setCorreo(newCorreo)
    }

    const onChangeDocumento = (event) =>{
        const newDocumento = event.target.value
        setDocumento(newDocumento)
    }

    const onChangeContraseña = (event) =>{
        const newPassword = event.target.value
        setContraseña(newPassword)
    }

    return(   
    <div className="container">
        <div >
        <br></br>
        <form onSubmit={onClickSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Nombre Contacto</label>
                <input type="text" className="form-control" value={nombre} onChange={onChangeNombre} name="nombre"/>
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Correo Contacto</label>
                <input type="text" className="form-control" value={correo} onChange={onChangeCorreo} name="correo"/>
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña Contacto</label>
                <input type="text" className="form-control" value={contraseña} onChange={onChangeContraseña} name="contraseña"/>
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Numero Contacto</label>
                <input type="text" className="form-control" value={numero} onChange={onChangeNumero} name="numero"/>
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Documento Identidad</label>
                <input type="text" className="form-control" value={documento} onChange={onChangeDocumento} name="documento"/>
            </div>
            <button id='form-create-contact-button' type="submit" className="btn btn-primary">Guardar</button>
        </form>
        </div>
    </div>
    );

}

export default CreateEntityComponent