import {useState, useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const[person,setPerson] = useState([]);
    const{id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/user/${id}`)
        .then(res => setPerson({...res.data}))
        .catch(err => console.log(err))
    });
    return(
        <div>
            <p>Username:{person.userName}</p>
            <p>Email:{person.email}</p>
            <Link to={"/people/"+person._id+"/edit"}>Edit</Link>

        </div>
        
    );
}   
export default Detail;