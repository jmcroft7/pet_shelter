import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';



const PetDetail = (props) => {

    const [petInfo, setPetInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/pets/${props.id}`)
            .then(res=> {
                console.log("Getting one pet")
                console.log(res.data.results)
                setPetInfo(res.data.results)
            })
            .catch(err=> console.log("error", err))
    },[])


    const deletePet =(e)=>{
        console.log("deleting something")
        axios.delete(`http://localhost:8000/pets/${props.id}`)
            .then(res=>{
                console.log("Adopting Pet")
                console.log(res)
                navigate("/")
            })
            .catch(err=> console.log("error", err))
    }
    
    return (
        <div>

            <div className="bg-light p-3">
                <button onClick= {deletePet} className="btn btn-danger float-end">Adopt</button>
                <h3>Details about: <u> {petInfo.name} </u> </h3>
            </div>
            <div className="border border-dark p-3 bg-light">
                <p><b>Pet Type: </b>{petInfo.type} </p>
                <p><b>Description: </b>{petInfo.description}</p>
                <p><b>Skills: </b>{petInfo.skill1}, {petInfo.skill2}, {petInfo.skill3}</p>
            </div>

        </div>
    );
};


export default PetDetail;