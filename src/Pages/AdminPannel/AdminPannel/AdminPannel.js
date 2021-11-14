import * as React from 'react';

import Box from '@mui/material/Box';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';


import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import AddProduct from './AddProduct/AddProduct';
import ManageProducts from './ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';




const AdminPannel = (props) => {



    let { path, url } = useRouteMatch();

    const { admin, logOut } = useAuth();



    console.log('admin', admin)




    return (

        <Grid sx={{ p: 2, pl: 2, m: 5 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            <Grid sx={{ backgroundColor: 'black' }} xs={6} md={3} >

                <Box sx={{ ml: 'auto', mr: 'auto', pt: 7, pb: 4, color: 'green' }} >
                    <h5>Admin Pannel</h5>

                    {/* <Link style={{ textDecoration: 'none' }} to={`${url}`}><Button sx={{ border: '2px solid black', marginBottom: '3px' }} >Admin Pannel</Button></Link><br /> */}

                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeadmin`}><Button sx={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }} >MakeAdmin</Button></Link> <br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageallorders`}><Button sx={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }} >Manage All Orders</Button></Link><br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageproducts`}><Button sx={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }} >Manage Products</Button></Link><br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/addproduct`}><Button sx={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }}>Add Product</Button></Link>


                    <br /> <Link style={{ textDecoration: 'none' }} to='/home'><Button onClick={logOut} sx={{ border: '1px solid red', color: 'goldenrod', marginBottom: '15px' }}>Log Out</Button></Link>

                </Box>

            </Grid>

            <Grid sx={{ border: '2px solid black', width: 'auto', p: 2 }} xs={4} md={9}>
                <Box>
                    <Switch>
                        <Route exact path={path}>

                            <div>Welcome to Admin Pannel</div>
                        </Route>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <Route path={`${path}/manageallorders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                    </Switch>
                </Box>
            </Grid>

        </Grid >

    );
};

export default AdminPannel;

