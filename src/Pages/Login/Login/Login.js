import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Grid } from '@mui/material';

import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';

import GoogleIcon from '@mui/icons-material/Google';




const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (

        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8, ml: 'auto', mr: 'auto', border: '3px solid black' }} xs={12} md={6}>
                    <Box sx={{ p: 3 }}>
                        <Typography variant="body1" gutterBottom>Login</Typography>




                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnChange}
                                variant="standard"
                                required
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic2"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                variant="standard"
                                required
                            />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">Not a User? Please Register</Button>
                            </NavLink>

                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>

                        <p>=========================</p>
                        <Button onClick={handleGoogleSignIn} variant="contained"><GoogleIcon ></GoogleIcon> Google Sign In </Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;
