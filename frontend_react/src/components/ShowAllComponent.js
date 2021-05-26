import React, { Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class ShowAllComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      contactos: [],
    };
  }

  callAPI(){
      fetch("http://localhost:3000/api/entidad")
          .then(res => res.json())
          .then(contact => this.setState({ contactos: contact }));
  };

  componentWillMount(){
      this.callAPI();
  }
  
  eliminar(contacto_id){
    let rpta = window.confirm("Desea eliminar?");
    if (rpta){
      axios.delete('http://localhost:3000/api/entidad/'+contacto_id+'/')
      .then(res =>{
        this.callAPI()
      })
    }
  }

  render(){
    return(

      <div className="container">
        <h1>Lista de contactos</h1>
        <table border="1">
          <thead>
            <tr>
              <th WIDTH="50">ID</th>
              <th WIDTH="200">_id</th>
              <th WIDTH="200">Nombre</th>
              <th WIDTH="150">Telefono</th>
              <th WIDTH="100">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactos.map( (contacto, index) =>{
              return(
                <tr key={contacto._id}>
                  <td style={{textAlign: 'center'}}>{index}</td>
                  <td>{contacto._id}</td>
                  <td>{contacto.name}</td>
                  <td>{contacto.number}</td>
                  <td>
                  <button onClick={()=>this.eliminar(contacto._id)}>Eliminar</button>
                </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button>
            <a href="/">Volver a casa</a>
        </button>
      </div>
    );
  }
}

export default ShowAllComponent;
