import { border, Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

import swal from 'sweetalert';





import { Grid } from '@mui/material';



const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    const [deleted, setDeleted] = useState({});


    useEffect(() => {
        fetch('https://mighty-inlet-20908.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [deleted]);


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        console.log('dlt i', id);
        if (proceed) {
            const url = `https://mighty-inlet-20908.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setDeleted(data.deletedCount);
                        swal("Order deleted successfully", id);
                    }
                });
        }

    }

    return (
        <div>
            <h1>ManageProducts {products.length}</h1>

            {/* {
                products.map(product => <div><p>{product.name}</p><button style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => handleDelete(product._id)}>Delete</button></div>)

            } */}

            <Box sx={{ p: 1 }}>
                {
                    products.map(product => <Grid container columns={{ xs: 5, sm: 12, md: 12 }} sx={{ border: '2px solid green', mb: 2, backgroundColor: 'black' }}>

                        <Grid xs={4} sm={5} md={3} sx={{ color: 'goldenrod' }}>
                            <img src={product.img} style={{ width: '80%' }} className="" alt="No Images" />

                        </Grid>
                        <Grid xs={4} sm={3} md={3} sx={{ color: 'goldenrod' }}>
                            <p>Name: {product.name}</p>
                        </Grid>
                        <Grid xs={4} sm={2} md={3} sx={{ color: 'goldenrod' }}>
                            <p>Price: ${product.price}</p>
                        </Grid>
                        <Grid xs={4} sm={2} md={3} >
                            <button style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => handleDelete(product._id)}>Delete</button>
                        </Grid>

                    </Grid>)
                }
            </Box>


        </div >
    );
};

export default ManageProducts;