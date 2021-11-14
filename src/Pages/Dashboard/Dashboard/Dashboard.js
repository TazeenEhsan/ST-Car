import * as React from 'react';


import Box from '@mui/material/Box';


import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

// Admin pannel


import Grid from '@mui/material/Grid';

// Admin pannel end


import useAuth from '../../../hooks/useAuth';

import Pay from './Pay/Pay';
import MyOrders from './MyOrders/MyOrders';
import AddReview from './AddReview/AddReview';





const Dashboard = (props) => {

    // Admin pannel ***********************************************

    let { path, url } = useRouteMatch();

    const { admin, logOut } = useAuth();



    console.log('admin', admin)




    return (


        // Admin pannel ***********************************************


        <Grid sx={{ p: 2, pl: 2, m: 5 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            <Grid sx={{ backgroundColor: 'black' }} xs={6} md={3} >

                {
                    !admin && <Box sx={{ ml: 'auto', mr: 'auto', pt: 7, pb: 4, color: 'green' }}>
                        <h5>Dashboard</h5>

                        <Link style={{ textDecoration: 'none' }} to={`${url}`}><Button sx={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }} >Dashboard</Button></Link><br />

                        <Link style={{ textDecoration: 'none' }} to={`${url}/pay`}><Button sx={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }}>Pay</Button></Link> <br />
                        <Link style={{ textDecoration: 'none' }} to={`${url}/myorders`}><Button sx={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }}>My Orders</Button></Link> <br />
                        <Link style={{ textDecoration: 'none' }} to={`${url}/addreview`}><Button sx={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }}>Add Review</Button></Link>

                        <br /> <Link style={{ textDecoration: 'none' }} to='/'><Button onClick={logOut} sx={{ border: '1px solid red', color: 'goldenrod', marginBottom: '15px' }}>Log Out</Button></Link>
                    </Box>

                }

            </Grid>

            <Grid sx={{ border: '2px solid black', width: 'auto', p: 2 }} xs={4} md={9}>
                {
                    !admin ? <Box>
                        <Switch>
                            <Route exact path={path}>
                                <div>Dashboard Here......</div>

                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/addreview`}>
                                <AddReview></AddReview>
                            </Route>
                        </Switch>
                    </Box>
                        :
                        <Box> Admin Cannot Go To Dashboard...... Go Back</Box>
                }
            </Grid>

        </Grid >





        // Admin pannel ***********************************************













        // <Box>
        //     <h1>I am Dashboard</h1>

        //     <Box sx={{ display: 'flex' }}>
        //         <CssBaseline />
        //         <AppBar
        //             position="fixed"
        //             sx={{
        //                 width: { sm: `calc(100% - ${drawerWidth}px)` },
        //                 ml: { sm: `${drawerWidth}px` },
        //             }}
        //         >
        //             <Toolbar>
        //                 <IconButton
        //                     color="inherit"
        //                     aria-label="open drawer"
        //                     edge="start"
        //                     onClick={handleDrawerToggle}
        //                     sx={{ mr: 2, display: { sm: 'none' } }}
        //                 >
        //                     <MenuIcon />
        //                 </IconButton>
        //                 <Typography variant="h6" noWrap component="div">
        //                     Dashboard vai
        //                 </Typography>
        //             </Toolbar>
        //         </AppBar>
        //         <Box
        //             component="nav"
        //             sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        //             aria-label="mailbox folders"
        //         >
        //             <Drawer
        //                 container={container}
        //                 variant="temporary"
        //                 open={mobileOpen}
        //                 onClose={handleDrawerToggle}
        //                 ModalProps={{
        //                     keepMounted: true, // Better open performance on mobile.
        //                 }}
        //                 sx={{
        //                     display: { xs: 'block', sm: 'none' },
        //                     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        //                 }}
        //             >
        //                 {drawer}
        //             </Drawer>
        //             <Drawer
        //                 variant="permanent"
        //                 sx={{
        //                     display: { xs: 'none', sm: 'block' },
        //                     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        //                 }}
        //                 open
        //             >
        //                 {drawer}
        //             </Drawer>
        //         </Box>
        //         <Box
        //             component="main"
        //             sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        //         >
        //             <Toolbar />
        //             <Switch>
        //                 <Route exact path={path}>
        //                     <Pay></Pay>
        //                     <MyOrders></MyOrders>
        //                 </Route>


        //                 <Route path={`${path}/pay`}>
        //                     <Pay></Pay>
        //                 </Route>
        //                 <Route path={`${path}/myorders`}>
        //                     <MyOrders></MyOrders>
        //                 </Route>
        //                 <Route path={`${path}/addreview`}>
        //                     <AddReview></AddReview>
        //                 </Route>
        //             </Switch>

        //         </Box>
        //     </Box>
        // </Box>
    );
};

export default Dashboard;