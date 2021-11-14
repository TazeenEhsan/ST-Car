import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';
import swal from 'sweetalert';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [myorders, setMyorders] = useState([]);

    const [deleted, setDeleted] = useState({});

    const { user } = useFirebase();

    useEffect(() => {
        fetch('https://quiet-river-70064.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [deleted]);

    const filtered = orders.filter(order => order.userEmail == user.email);



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
            <h1>My Orders</h1>
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
                            <th scope="col">Cancelation</th>



                        </tr>
                    </thead>
                    {
                        filtered.map(order => <tbody key={order._id}>
                            <tr>
                                <th scope="row">{i++}</th>
                                <td>{order._id}</td>
                                <td>{order.userName}</td>
                                <td>{order.userEmail}</td>
                                <td>{order.serviceName}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>{order.status}</td>
                                <td><button style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => handleDelete(order._id)}>Delete</button></td>

                            </tr>

                        </tbody>)

                    }
                </table>

            </div>

        </div>
    );
};

export default MyOrders;