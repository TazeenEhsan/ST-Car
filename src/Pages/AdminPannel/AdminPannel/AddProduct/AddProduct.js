import React, { useRef } from 'react';
import { useHistory } from 'react-router';

import swal from 'sweetalert';

import './AddProduct.css'

const AddProduct = () => {

    const nameRef = useRef();
    const brandRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();

    const history = useHistory();

    const handleAddUser = e => {



        const name = nameRef.current.value;
        const brand = brandRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;

        const newUser = { name, brand, price, description, img };

        fetch('https://mighty-inlet-20908.herokuapp.com/products', {
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
                    swal("Successfully added New Product!!!");
                    e.target.reset();
                    history.push('/products')
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Add New Product</h2>
            <div className="container adding-form">
                <form onSubmit={handleAddUser}>
                    <input type="text" ref={nameRef} placeholder="Product Name" required /> <br />

                    <input type="text" ref={brandRef} placeholder="Brand Name" required /> <br />

                    <input type="number" ref={priceRef} placeholder="Price" required />

                    <textarea name="message" className="" ref={descriptionRef} placeholder="Description" required></textarea>
                    <input type="text" ref={imgRef} placeholder="Product Image URL" required />

                    {/* <input type="submit" value="Add" /> */}
                    <br /><button className="btn btn-danger" type="submit">Add</button>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;