import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
import { useHistory } from 'react-router';

const Header = () => {
    const { user, logOut, admin } = useAuth();
    const history = useHistory();

    const handleLogin = () => {

        history.push('/login');

    }


    return (
        <div className="">

            <nav className="navbar sticky-top navbar-expand-lg navbar-light nav-bg container">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">ST Cars</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justyfy-content-end" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/products">Explore Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>


                            {user?.displayName ?
                                <>

                                    {
                                        admin ? <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/adminpannel">Admin Pannel</Link></li>
                                            :
                                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link></li>
                                    }



                                    <li className="nav-item"><button className="btn btn-danger ms-2 p-1" onClick={logOut} ><i className="fas fa-sign-out-alt"></i> Logout </button><span>  {user?.displayName}</span>  </li>
                                </> :
                                <li className="nav-item"> <button className="btn " style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={handleLogin}><i className="fas fa-sign-in-alt"></i>  Login</button></li>

                            }


                            {/* <li className="nav-item">
                                {user?.displayName ?
                                    <p className="nav-link active" aria-current="page" >Looged in as : {user?.displayName}
                                        <button className="btn btn-danger ms-2 p-1" onClick={logOut} ><i className="fas fa-sign-out-alt"></i> Logout </button> </p> :
                                    <p className="nav-link active" aria-current="page" ><button className="btn " style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={handleLogin}><i className="fas fa-sign-in-alt"></i>  Login</button></p>
                                }
                            </li> */}


                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;