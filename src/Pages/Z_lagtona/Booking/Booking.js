import React, { useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import swal from 'sweetalert';
import useFirebase from '../../hooks/useFirebase';
import useService from '../../hooks/useService';

import './Booking.css'

const Booking = (props) => {


    const { booking, setBooking } = useState({});

    const services = useService();

    const history = useHistory();

    const { bookingId } = useParams();

    const { user } = useFirebase();
    const userNameRef = useRef();
    const userEmailRef = useRef();
    const serviceNameRef = useRef();

    const addressRef = useRef();
    const phoneRef = useRef();

    let matched = {};

    matched = services.find(service => service._id === bookingId)

    // console.log('matched for boo', matched);



    const handleOrderBooking = e => {



        const userName = userNameRef.current.value;
        const userEmail = userEmailRef.current.value;
        const serviceName = serviceNameRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;

        const status = 'Pending'

        const newUser = { userName, userEmail, serviceName, address, phone, status };

        fetch('https://quiet-river-70064.herokuapp.com/orders', {
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
                    history.push('/MyOrders')
                    // reset();
                }
            })
        e.preventDefault();
    }


    return (
        <div>
            <h1>Booking Order Section</h1>



            <div className="container adding-form">
                <p>Order Id: {bookingId}</p>
                <p>Product Name: {matched?.name}</p>
                <div style={{ border: '2px solid black', paddingBottom: '15px' }}>
                    <form onSubmit={handleOrderBooking}>
                        {/* <input type="text" ref={userNameRef}placeholder="User Name" value={user.displayName} required /> */}
                        <label htmlFor="uname">User Name:</label><br />
                        <input type="text" ref={userNameRef} placeholder="User Name" value={user?.displayName} required /><br />
                        <label htmlFor="uemail">User Email:</label><br />
                        <input name="uemail" type="email" ref={userEmailRef} placeholder="User Email" value={user?.email} readonly /><br />

                        {/* <label htmlFor="uemail">User Email readonly:</label><br />
                    <input name="uemail" type="email" placeholder="User Email" value={user.email} readonly /><br />
                    */}
                        <label htmlFor="uemail">Product Name:</label><br />
                        <input type="text" ref={serviceNameRef} placeholder="Package Name" value={matched?.name} required />

                        <input type="text" ref={phoneRef} placeholder="Phone" required />

                        <textarea name="message" className="" ref={addressRef} placeholder="Address" required></textarea>


                        {/* <input type="submit" value="Add" /> */}
                        <br /><button className="btn btn-danger" type="submit">Conform Buy</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Booking;