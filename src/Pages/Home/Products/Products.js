import React from 'react';
import { Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'


const Products = (props) => {

    const products = useProducts();

    console.log(props.home);

    const forHome = products;


    return (
        <div>
            {!products?.length && !forHome?.length ? <div style={{ marginTop: '30px' }}> <Spinner animation="border" variant="danger" /><h1>Wait..It's loading or Go Back to home</h1> </div>
                :
                <div>
                    <h1>Available Products</h1>

                    <div className="products-container">
                        {
                            props.home === 'yes' ? forHome.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>) :
                                products.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>
                </div>
            }

        </div >
    );
};

export default Products;