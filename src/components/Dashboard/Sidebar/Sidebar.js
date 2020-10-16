import React from 'react';
import './Sidebar.css';
import logo from '../../../images/logos/logo.png';
import serviceIcon from '../../../images/icons/serviceIcon.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserPlus, faCommentAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ isAdmin }) => {

    return (
        <div className="sidebar" style={{ height: "100%" }}>
            <nav className="navbar navbar-expand-lg navbar-light flex-column mx-5">
                <Link className="navbar-brand" to="/">
                    <img style={{ height: 47 }} src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-column">
                        {!isAdmin ? <div>
                            <li className="nav-item">
                                <Link className="nav-link" to="#order">
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#review">
                                    <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#services">
                                    <img src={serviceIcon} alt="icon" /> <span>Service list</span>
                                </Link>
                            </li>
                        </div> : <div>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#userList">
                                        <img src={serviceIcon} alt="icon" /> <span>User list</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#addServices">
                                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#makeAdmin">
                                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                    </Link>
                                </li>
                            </div>}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;