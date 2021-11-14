import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://mighty-inlet-20908.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    return products;
};

export default useProducts;