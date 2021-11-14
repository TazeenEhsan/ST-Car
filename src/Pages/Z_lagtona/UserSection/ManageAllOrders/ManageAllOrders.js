import React, { useEffect, useState } from 'react';
import useOrders from '../../../hooks/useOrders';
import swal from 'sweetalert';
import swal2 from 'sweetalert';
import './ManageAllOrders.css'

import { useHistory } from 'react-router';

const ManageAllOrders = () => {

    const [updated, setUpdated] = useState({});
    const [deleted, setDeleted] = useState({});
    // const [orders, setOrders] = useOrders();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://quiet-river-70064.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [updated, deleted]);


    const history = useHistory();

    const handleStatus = (id) => {

        const matched = orders.filter(order => order._id === id);


        let orderstatus;

        if (matched[0].status === 'Pending') {
            orderstatus = 'Approved';
        }
        else {
            orderstatus = 'Pending';
        }

        const updates = { userName: matched[0].userName, serviceName: matched[0].serviceName, address: matched[0].address, phone: matched[0].phone, status: orderstatus }

        setUpdated(updates);

        // console.log('for update', matched[0].userName);
        if (matched[0].userName) {
            // console.log('updated', updated);
            const url = `https://quiet-river-70064.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updates)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        swal2("Status placed successfully");
                        setOrders(orders);
                        setUpdated({});
                    }
                })

        }

    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://quiet-river-70064.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setDeleted({});
                        swal("Order deleted successfully", id);
                    }
                });
        }

    }

    let i = 1;


    return (
        <div>
            <h1>All Orders</h1>

            <div className="orders-con container table-responsive">

                <table className="table table-hover table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Package Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    {
                        orders.map(order => <tbody key={order._id}>
                            <tr>
                                <th scope="row">{i++}</th>
                                <td>{order._id}</td>
                                <td>{order.userName}</td>
                                <td>{order.userEmail}</td>
                                <td>{order.serviceName}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>{order.status}</td>
                                <td><button style={{ backgroundColor: 'yellow', color: 'black', padding: '10px', borderRadius: '5px' }} onClick={() => handleStatus(order._id)}>Update Status</button></td>
                                <td><button style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => handleDelete(order._id)}>Delete</button></td>

                            </tr>

                        </tbody>)

                    }
                </table>

            </div>
        </div>
    );
};

export default ManageAllOrders;

