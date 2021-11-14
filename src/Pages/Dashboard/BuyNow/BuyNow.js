import React, { useRef } from 'react';

import { useHistory, useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import useProducts from '../../../hooks/useProducts';
import './BuyNow.css'

const BuyNow = (props) => {



    const products = useProducts();

    const history = useHistory();

    const { buyId } = useParams();

    // const { user } = useFirebase();
    const { user, admin } = useAuth();

    const userNameRef = useRef();
    const userEmailRef = useRef();
    const productNameRef = useRef();

    const addressRef = useRef();
    const phoneRef = useRef();

    let matched = {};

    matched = products.find(product => product._id === buyId)

    console.log('matched', matched)

    const handleOrderBooking = e => {



        const userName = userNameRef.current.value;
        const userEmail = userEmailRef.current.value;
        const productName = productNameRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;

        const status = 'Pending'

        const newUser = { userName, userEmail, productName: productName, address, phone, status };

        fetch('https://mighty-inlet-20908.herokuapp.com/orders', {
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
                    swal("Order placed successfully");
                    e.target.reset();
                    history.push('/products')
                    // reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h1>Order Section</h1>

            {
                !admin ? <div className="container adding-form" >
                    <p>Order Id: {buyId}</p>
                    <p>Product Name: {matched?.name}</p>
                    <div style={{ border: '2px solid black', backgroundColor: 'white', paddingBottom: '15px' }}>
                        <form onSubmit={handleOrderBooking}>
                            {/* <input type="text" ref={userNameRef}placeholder="User Name" value={user.displayName} required /> */}
                            <label htmlFor="uname">User Name:</label><br />
                            <input type="text" ref={userNameRef} placeholder="User Name" value={user?.displayName} required /><br />
                            <label htmlFor="uemail">User Email:</label><br />
                            <input name="uemail" type="email" ref={userEmailRef} placeholder="User Email" value={user?.email} readonly /><br />


                            <label htmlFor="uemail">Product:</label><br />
                            <input type="text" ref={productNameRef} placeholder="Product Name" value={matched?.name} required />

                            <input type="text" ref={phoneRef} placeholder="Phone" required />

                            <textarea name="message" className="" ref={addressRef} placeholder="Address" required></textarea>


                            {/* <input type="submit" value="Add" /> */}
                            <br /><button className="btn btn-danger" type="submit">Conform Buy</button>
                        </form>
                    </div>
                </div>
                    :
                    <div style={{ backgroundColor: 'black', color: 'red', padding: '50px', width: '50%', marginLeft: 'auto', marginRight: 'auto' }}> <h4 >  An Admin buying a product is restricted..........</h4> Go back and Login with your User ID</div>

            }

        </div >
    );
};

export default BuyNow;