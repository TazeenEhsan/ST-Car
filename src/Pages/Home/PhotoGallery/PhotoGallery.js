import React from 'react';

import './PhotoGallery.css'

import img1 from '../../../images/Photogallery/photogallery (1).jpg'

import img2 from '../../../images/Photogallery/photogallery (2).jpg'
import img3 from '../../../images/Photogallery/photogallery (3).jpg'
import img4 from '../../../images/Photogallery/photogallery (4).jpg'
import img5 from '../../../images/Photogallery/photogallery (5).jpg'
import img6 from '../../../images/Photogallery/photogallery (6).jpg'
import img7 from '../../../images/Photogallery/photogallery (7).jpg'
import img8 from '../../../images/Photogallery/photogallery (8).jpg'
import img9 from '../../../images/Photogallery/photogallery (9).jpg'
import img10 from '../../../images/Photogallery/photogallery (10).jpg'
import img11 from '../../../images/Photogallery/photogallery (11).jpg'
import img12 from '../../../images/Photogallery/photogallery (12).jpg'
import img13 from '../../../images/Photogallery/photogallery (13).jpg'
import img14 from '../../../images/Photogallery/photogallery (14).jpg'
import img15 from '../../../images/Photogallery/photogallery (15).jpg'
import img16 from '../../../images/Photogallery/photogallery (16).jpg'
import img17 from '../../../images/Photogallery/photogallery (17).jpg'
import img18 from '../../../images/Photogallery/photogallery (18).jpg'
import img19 from '../../../images/Photogallery/photogallery (19).jpg'
import img20 from '../../../images/Photogallery/photogallery (20).jpg'

const PhotoGallery = () => {


    return (
        <div>
            <h4 style={{ color: '#0e3574', marginBottom: '35px', marginTop: '15px' }}>Photo Gallery</h4>

            <div className="container photo-gallery-con">
                <div className="row gx-0">
                    <div className="col-lg-3 col-sm-12 ">
                        <img src={img1} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img2} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img3} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img4} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row  gx-0">
                    <div className="col-lg-3 col-sm-12">
                        <img src={img5} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img6} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img7} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img8} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row  gx-0">
                    <div className="col-lg-3 col-sm-12">
                        <img src={img9} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img10} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img11} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img12} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row  gx-0">
                    <div className="col-lg-3 col-sm-12">
                        <img src={img13} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img14} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img15} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img16} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row  gx-0">
                    <div className="col-lg-3 col-sm-12">
                        <img src={img17} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img18} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img19} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <img src={img20} alt="" className="img-fluid" />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default PhotoGallery;