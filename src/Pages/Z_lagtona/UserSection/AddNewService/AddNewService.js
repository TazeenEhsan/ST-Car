import React, { useRef } from 'react';
import { useHistory } from 'react-router';

import swal from 'sweetalert';

import './AddNewService.css'

const AddNewService = () => {
    const nameRef = useRef();
    const feeRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();

    const history = useHistory();

    const handleAddUser = e => {



        const name = nameRef.current.value;
        const fee = feeRef.current.value;
        const content = descriptionRef.current.value;
        const img = imgRef.current.value;

        const newUser = { name, fee, content, img };

        fetch('https://quiet-river-70064.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // alert('Successfully added the user.')
                    swal("Successfully added New Package!!!");
                    e.target.reset();
                    history.push('/home')
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Add New Package</h2>
            <div className="container adding-form">
                <form onSubmit={handleAddUser}>
                    <input type="text" ref={nameRef} placeholder="Package Name" required /> <br />

                    <input type="number" ref={feeRef} placeholder="Cost" required />

                    <textarea name="message" className="" ref={descriptionRef} placeholder="Description" required></textarea>
                    <input type="text" ref={imgRef} placeholder="Image URL" required />

                    {/* <input type="submit" value="Add" /> */}
                    <br /><button className="btn btn-danger" type="submit">Add</button>
                </form>
            </div>

        </div>
    );
};

export default AddNewService;