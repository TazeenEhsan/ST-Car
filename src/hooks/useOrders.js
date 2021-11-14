import { useEffect, useState } from 'react';
const useOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://mighty-inlet-20908.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, []);
    return [orders, setOrders];
}
export default useOrders;
