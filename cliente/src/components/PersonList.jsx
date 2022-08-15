import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const PersonList =(props) => {
    const{people}=props;
    const deleteUser=(userId)=>{
        //Codigo para hacer una peticion de delete con identificador userId
        axios.delete(`http://localhost:5000/api/user/${userId}`)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        }
    return(
        <div>
            {
                people.map((person, idx)=>{
                    return <p key={idx}>
                    <Link to={"/people/"+person._id}>{person.userName}--{person.email}
                    <br/>
                    </Link>
                    <button onClick={(e)=>{deleteUser(person._id)}}>Eliminar</button>
                    </p>
                })
            }
        </div>


    );
}
export default PersonList