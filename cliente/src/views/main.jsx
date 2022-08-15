import React,{useState,useEffect} from 'react';
import PersonForms from '../components/PersonForms.jsx';
import PersonList from '../components/PersonList.jsx';
import axios from 'axios';
const Main = ()=>{
    const [people, setPeople]=useState([]);
    const [loaded, setLoaded]=useState(false);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/users')
        .then(res=>{
            setPeople(res.data)
            setLoaded(true);
        })
    },[]);

    const removeFromDom = (userId) =>{
        setPeople(people.filter(person => person._id !== userId))
    }
    
    return(
        <div>
            <PersonForms/>
            <hr/>
            {loaded && <PersonList people={people}/>}
        </div>
    );
    
}
export default Main;