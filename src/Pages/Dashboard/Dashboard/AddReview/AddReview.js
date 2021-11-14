import React, { useState } from 'react';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextField, Button } from '@mui/material';

import useAuth from '../../../../hooks/useAuth';
import { useHistory } from 'react-router';

import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';

import swal from 'sweetalert';

const AddReview = () => {


    const [reviewData, setReviewData] = useState({});

    const [ratingValue, setRatingValue] = useState(0);

    console.log(ratingValue);
    const { user } = useAuth();


    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newreviewData = { ...reviewData };
        newreviewData[field] = value;
        console.log(newreviewData);
        setReviewData(newreviewData);
    }
    if (ratingValue === null) {
        setRatingValue(0);
    }
    const handleLoginSubmit = e => {
        // loginUser(reviewData.email, reviewData.password, location, history);

        if (ratingValue === null) {
            setRatingValue(0);
        }
        const displayName = user.displayName;
        const review = reviewData.review;
        const rating = ratingValue;
        const newReview = { displayName, review, rating }
        fetch('https://mighty-inlet-20908.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // alert('Successfully added the user.')
                    swal("Successfully added a review !!");
                    e.target.reset();
                    history.push('/home')
                }
            })
        e.preventDefault();

    }


    return (
        <div>
            <h1>Add a Review</h1>

            {/* <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Type your opinion"

                style={{ width: 300 }}
            /> */}
            <form onSubmit={handleLoginSubmit}>

                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Type your opinion"
                    name="review"
                    onBlur={handleOnChange}

                    style={{ width: 300 }}
                    required />
                <br />
                {/* <TextField
                    sx={{ width: '300px', m: 1 }}
                    id="standard-basic"
                    placeholder="Rate our Site"
                    name="rating"
                    type="number"
                    onBlur={handleOnChange}
                    variant="standard"
                    required
                /> */}
                <Typography component="legend">Rate our Site</Typography>
                <Rating
                    name="simple-controlled"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                        setRatingValue(newValue);
                    }}

                    required />
                <p>:{ratingValue}</p>
                <br />


                <Button sx={{ width: '200px', m: 1 }} type="submit" variant="contained">Post Review</Button>


            </form>

        </div>
    );
};

export default AddReview;