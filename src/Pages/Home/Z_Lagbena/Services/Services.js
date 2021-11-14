import React from 'react';
import { Spinner } from 'react-bootstrap';
import useService from '../../../hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = useService();




    return (
        <div>
            {!services?.length ? <div style={{ marginTop: '30px' }}> <Spinner animation="border" variant="danger" /><h1>Wait..It's loading or Go Back to home</h1> </div> :
                <div>
                    <h1>Packages {services.length}</h1>

                    <div className="services-container">
                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </div>
                </div>
            }

        </div >
    );
};

export default Services;