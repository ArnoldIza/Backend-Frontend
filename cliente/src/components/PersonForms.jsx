import React, { useState } from 'react';
import axios from 'axios';
const PersonForms =() =>{
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

   const onSubmitHandlet = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/user/new',{userName,email})
            .then(res=> console.log('Respuesta exitosa',res))
            .catch(err => console.log('Peticion Fallida',err))
    }
    return(
        <form onSubmit={onSubmitHandlet}>
            <p>
                <label>Nombre de Usuario:</label>
                <input type="text" onChange={(e)=> setUserName(e.target.value)} value={userName}/>

            </p>
            <p>
                <label>Correo:</label>
                <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email}/>
            </p>
            <input type="submit"/>
           

        </form>
    );
}
export default PersonForms