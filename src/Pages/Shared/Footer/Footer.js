import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-con">
            <div className="container row">
                <div className="col-lg-6 col-sm-6">
                    <h4 style={{ color: 'tomato' }}>ST Cars</h4>
                    <p>Privacy & Policy</p>
                    <p>Terms of USe</p>

                </div>
                <div className="col-sm-6">
                    <p><i className="fas fa-envelope"></i> Contact at :<span style={{ color: 'yellowgreen' }}> stcars@gmail.com </span></p>
                    <p><i className="fas fa-phone-alt"></i> Phone: +8801782828283</p>

                </div>
            </div>
            <div className="row container">
                <div className="col-lg-6 col-sm-6">

                </div>

            </div>
            <p className="mt-5 " style={{ color: 'goldenrod' }}>ST Cars &copy;2021 </p>
        </div>
    );
};

export default Footer;