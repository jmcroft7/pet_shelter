import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router'

const Edit = (props) => {

    const [petInfo, setPetInfo] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const [formErrors, setFormErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/pets/${props.id}`)
            .then(res => {
                console.log(res)
                setPetInfo(res.data.results)

            })
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        console.log("changing something!")
            setPetInfo({
                ...petInfo,
                [e.target.name]: e.target.value.toUpperCase()
            })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/pets/${props.id}`, petInfo)
        .then(res => {
            console.log(res)
            if (res.data.results) {
                navigate("/")
            } else {
                console.log("Form filled out improperly!")
                setFormErrors(res.data.error.errors)
            }
        })
        .catch(err => console.log("error submitting form!", err))
    }


    return (
        <div>
            <h3 className="bg-light p-3">Edit: <u> {petInfo.name} </u></h3>

            <form onSubmit={submitHandler} className='border border-dark p-3 row mx-1 bg-light'>

                <div className="left col-2">

                    <div className="form-group">
                        <label>Pet Name:</label>
                        <input onChange={changeHandler} type="text" name="name" id="" className="form-control" value={petInfo.name}/>
                    {formErrors.name ? <p className="text-danger">{formErrors.name.message}</p> : ""}
                    </div>

                    <div className="form-group">
                        <label>Pet Type:</label>
                        <input onChange={changeHandler} type="text" name="type" id="" className="form-control" value={petInfo.type}/>
                        {formErrors.type ? <p className="text-danger">{formErrors.type.message}</p> : ""}
                    </div>

                    <div className="form-group">
                        <label>Pet Description</label>
                        <textarea onChange={changeHandler} name="description" id="" cols="10" rows="10" className="form-control" value={petInfo.description}></textarea>
                        {formErrors.description ? <p className="text-danger">{formErrors.description.message}</p> : ""}
                    </div>

                </div>


                <div className="right col-2">
                    <p>Skills: (optional) </p>
                    <div className="form-group">
                        <label>Skill: </label>
                        <input onChange={changeHandler} type="text" name="skill1" id="" className="form-control" value={petInfo.skill1}/>
                    </div>

                    <div className="form-group">
                        <label>Skill:</label>
                        <input onChange={changeHandler} type="text" name="skill2" id="" className="form-control" value={petInfo.skill2}/>
                    </div>

                    <div className="form-group">
                        <label>Skill:</label>
                        <input onChange={changeHandler} type="text" name="skill3" id="" className="form-control" value={petInfo.skill3}/>
                    </div>


                    <input type="submit" value="Edit Pet!" className="mt-3 btn btn-primary"/>
                </div>

            </form>
        </div>
    );
};


export default Edit;