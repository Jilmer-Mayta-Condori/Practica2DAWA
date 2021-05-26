import React  , {useState}from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

const WelcomeEntity = props => {

    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('user')))
    
    return(   

    <div >
        <div >
            <h1>Welcome {usuario.name}</h1>
        </div>
    </div>
    );

}

export default WelcomeEntity