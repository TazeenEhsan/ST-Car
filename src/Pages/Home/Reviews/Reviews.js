
import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';


const Reviews = () => {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch('https://mighty-inlet-20908.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 400, m: 2, mt: 4, color: 'success.main' }} variant="h3" component="div">
                        Reviews from Client
                    </Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            reviews?.map(reviews => <>

                                <Grid item xs={4} sm={4} md={4}>
                                    <Card sx={{ minWidth: 275, border: "2px solid red", boxShadow: 0, backgroundColor: '#01463fbf' }}>

                                        <CardContent>
                                            <Typography variant="p" component="div">
                                                By: {reviews.displayName}
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                {reviews.review}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Rating: {reviews.rating}
                                            </Typography>

                                            <Rating name="read-only" value={reviews.rating} readOnly />

                                        </CardContent>
                                    </Card>
                                </Grid>

                            </>)
                        }
                    </Grid>
                </Container>
            </Box>


        </div>
    );
};

export default Reviews;