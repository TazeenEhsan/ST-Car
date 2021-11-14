import React from 'react';

import Banner from '../Banner/Banner';
import HelpSection from '../HelpSection/HelpSection';

import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';


import Subscribed from '../Subscribed/Subscribed';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products home={'yes'}></Products>
            <PhotoGallery></PhotoGallery>
            <Reviews></Reviews>

            <div className="container" style={{ width: 'auto' }}>
                <div className="row">
                    <div className="col-sm-5 col-lg-5">
                        <Subscribed></Subscribed>
                    </div>
                    {/* <div className="col-sm-6 col-lg-6">
                        <HelpSection></HelpSection>
                    </div> */}
                </div>



            </div>

        </div>
    );
};

export default Home;

// #0dbcc0