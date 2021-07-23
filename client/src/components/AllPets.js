import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllPets = () => {
    const [allPets, setAllPets] = useState([])
    const [deleteclicked, setDeleteClicked] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/pets")
            .then(res => {
                console.log("logging response!!", res)
                setAllPets(res.data.results)

            })
            .catch(err => console.log("errorrr with axios call", err))
    }, [deleteclicked])


    return (
        <div>
            <h3 className="bg-light p-3">These pets are looking for a good home</h3>

            <table class="table table-striped border border-darkrow border border-dark p-3">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {allPets.map((q, i) => {
                        return <tr key={i}>

                            <td>{q.name}</td>
                            <td>{q.type}</td>
                            <td>
                                <Link to={`/pets/info/${q._id}`} className="btn btn-primary m-2">Details</Link>
                                |
                                <Link to={`/pets/edit/${q._id}`} className="btn btn-info m-2">Edit</Link>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default AllPets;