import Button from '@restart/ui/esm/Button';
import React from 'react';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({ service }) => {

    const { _id, img, name, content, fee } = service;

    const history = useHistory();

    const handleBook = () => {
        // console.log('detailde id', _id)
        history.push(`/booking/${_id}`);
    }


    return (
        <div className="service-container">

            <div className="image-part">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="body-part">
                <h6>{name}</h6>
                <span>{content.slice(0, 100)}....</span>
                <p><span style={{ color: 'firebrick', backgroundColor: '' }}>Package cost:</span> ${fee}</p>

                <Button variant="primary" className="bookbtn" onClick={handleBook}>Book Now</Button>
            </div>

        </div>
    );
};

export default Service;