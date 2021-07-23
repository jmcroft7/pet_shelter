import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router"

const Create = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const [formErrors, setFormErrors] = useState({})


    const changeHandler = (e) => {
        console.log("changing some input now!!!!")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value.toUpperCase()
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/pets/create", formInfo)
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
        <div className="">
            <h3 className="bg-light p-3">Know a pet needing a home?</h3>


            <form onSubmit={submitHandler} className='row border border-dark p-3 bg-light'>

                <div className="left col-2">

                    <div className="form-group">
                        <label>Pet Name:</label>
                        <input onChange={changeHandler} type="text" name="name" id="" className="form-control" />
                        {formErrors.name ? <p className="text-danger">{formErrors.name.message}</p> : ""}
                    </div>

                    <div className="form-group">
                        <label>Pet Type:</label>
                        <input onChange={changeHandler} type="text" name="type" id="" className="form-control" />
                        {formErrors.type ? <p className="text-danger">{formErrors.type.message}</p> : ""}
                    </div>

                    <div className="form-group">
                        <label>Pet Description</label>
                        <textarea onChange={changeHandler} name="description" id="" cols="10" rows="10" className="form-control"></textarea>
                        {formErrors.description ? <p className="text-danger">{formErrors.description.message}</p> : ""}
                    </div>

                </div>


                <div className="right mx-4 col-2">
                    <p>Skills: (optional) </p>
                    <div className="form-group">
                        <label>Skill: </label>
                        <input onChange={changeHandler} type="text" name="skill1" id="" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Skill:</label>
                        <input onChange={changeHandler} type="text" name="skill2" id="" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Skill:</label>
                        <input onChange={changeHandler} type="text" name="skill3" id="" className="form-control" />
                    </div>


                    <input type="submit" value="Add Pet!" className="mt-3 btn btn-primary"/>
                </div>

            </form>
        </div>
    );
};


export default Create;