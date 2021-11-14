import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';

import './Product.css'
const Product = ({ product }) => {

    const { _id, img, name, brand, description, price } = product;

    const history = useHistory();

    const handleBook = () => {
        // console.log('detailde id', _id)
        history.push(`/buy/${_id}`);
    }

    return (
        <div className="product-container">

            <div className="image-part">
                <img src={img} className="img-fluid" alt="No Imagee Found" />
                {/* className="img-fluid" */}
            </div>
            <div className="body-part">
                <h6>{name}</h6>
                <p>Brand: {brand}</p>
                <span className="description">{description.slice(0, 100)}....</span>
                <p><span style={{ color: 'firebrick', backgroundColor: '' }}>Price: $</span> {price}</p>

                <Button variant="primary" className="bookbtn" onClick={handleBook}>Buy Now</Button>
            </div>

        </div>
    );
};

export default Product;