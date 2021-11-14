import React from 'react';
import { useHistory } from 'react-router';
import './Subs.css'
const Subscribed = () => {

    const history = useHistory();
    const handleSubmit = () => {
        history.push('/products')
        alert('Subscription done');
    }
    return (
        <div className="container subs-con">

            <h5>Follow us to receive the latest news</h5>

            <input type="text" name="" id="" placeholder="Your name" required /><br />
            <input type="email" name="" id="" placeholder="Your email" /><br />
            <button onClick={handleSubmit}>Submit</button>

        </div>
    );
};

export default Subscribed;